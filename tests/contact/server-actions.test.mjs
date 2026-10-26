import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function loadServerModule(path, { env = {}, fetchMock = async () => { throw new Error('Unexpected outbound request'); }, dependency = null } = {}) {
  const source = readFileSync(path, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: path,
    reportDiagnostics: true,
  });
  const errors = (compiled.diagnostics ?? []).filter(d => d.category === ts.DiagnosticCategory.Error);
  assert.equal(errors.length, 0, 'Module must compile without diagnostics');
  const exports = {};
  const context = {
    exports,
    process: { env },
    fetch: fetchMock,
    URLSearchParams,
    console: { error() {}, warn() {} },
    require: (id) => {
      assert.equal(id, '@/utils/notifications/contact', 'Only the approved contact dependency may be imported');
      return { sendContactEmail: dependency };
    },
  };
  vm.runInNewContext(compiled.outputText, context, { filename: path, timeout: 1000 });
  return exports;
}

function validForm(token = 'valid-token') {
  const body = new FormData();
  body.set('email', 'visitor@example.org');
  body.set('reason', 'general');
  body.set('message', 'I have a ministry resource question.');
  body.set('cf-turnstile-response', token);
  return body;
}

test('Contact server action rejects missing, invalid and expired Turnstile verification without email delivery', async () => {
  let deliveries = 0;
  let verifyRequests = 0;
  const { submitContactMessage } = loadServerModule('app/contact/actions.ts', {
    env: { TURNSTILE_SECRET_KEY: 'test-secret' },
    fetchMock: async () => {
      verifyRequests++;
      return { ok: true, json: async () => ({ success: false, 'error-codes': ['timeout-or-duplicate'] }) };
    },
    dependency: async () => { deliveries++; return true; },
  });
  for (const token of ['', 'invalid-token', 'expired-token']) {
    const result = await submitContactMessage({ status: 'idle', message: '' }, validForm(token));
    assert.equal(result.status, 'error');
    assert.match(result.message, /security check/i);
  }
  assert.equal(deliveries, 0, 'No emails should be sent for rejected challenges');
  assert.equal(verifyRequests, 2, 'Empty token should be rejected before requesting Cloudflare');
});

test('Contact server action never reports delivery success on rejected or thrown email provider responses', async () => {
  for (const mode of ['rejected', 'throws']) {
    const { submitContactMessage } = loadServerModule('app/contact/actions.ts', {
      env: { TURNSTILE_SECRET_KEY: 'test-secret' },
      fetchMock: async () => ({ ok: true, json: async () => ({ success: true }) }),
      dependency: async () => {
        if (mode === 'throws') throw new Error('Simulated Resend outage');
        return false;
      },
    });
    const result = await submitContactMessage({ status: 'idle', message: '' }, validForm());
    assert.equal(result.status, 'error');
    assert.match(result.message, /could not be delivered/i);
  }
});

test('Contact server action validates fields and never sends contact data to Supabase', async () => {
  let verified = false;
  let emails = 0;
  const { submitContactMessage } = loadServerModule('app/contact/actions.ts', {
    env: { TURNSTILE_SECRET_KEY: 'test-secret' },
    fetchMock: async () => { verified = true; return { ok: true, json: async () => ({ success: true }) }; },
    dependency: async () => { emails++; return true; },
  });
  const missingMessage = validForm();
  missingMessage.set('message', '');
  const result = await submitContactMessage({ status: 'idle', message: '' }, missingMessage);
  assert.equal(result.status, 'error');
  assert.equal(verified, false);
  assert.equal(emails, 0);
});

test('Resend integration uses verified sender, Gmail recipient and visitor Reply-To; failure remains an error', async () => {
  let outbound = null;
  let httpOk = true;
  const { sendContactEmail } = loadServerModule('utils/notifications/contact.ts', {
    env: { RESEND_API_KEY: 'unit-test-key', PRAYER_NOTIFICATION_FROM: 'FCE <verified@example.org>' },
    fetchMock: async (url, opts) => {
      assert.equal(url, 'https://api.resend.com/emails');
      outbound = JSON.parse(opts.body);
      return { ok: httpOk, status: httpOk ? 200 : 503 };
    },
  });
  const contact = { name: 'Visitor', email: 'visitor@example.org', reason: 'General Question', message: 'Test message' };
  assert.equal(await sendContactEmail(contact), true);
  assert.equal(outbound.from, 'FCE <verified@example.org>');
  assert.equal(outbound.to[0], 'faithchangeseverythingministry@gmail.com');
  assert.equal(outbound.reply_to, 'visitor@example.org');
  httpOk = false;
  assert.equal(await sendContactEmail(contact), false);
});

test('Resend integration rejects absent credentials without calling external services', async () => {
  const { sendContactEmail } = loadServerModule('utils/notifications/contact.ts');
  assert.equal(await sendContactEmail({ name: '', email: 'x@example.org', reason: 'General Question', message: 'Test' }), false);
});
