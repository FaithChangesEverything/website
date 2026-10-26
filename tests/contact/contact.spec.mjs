import { test, expect } from '@playwright/test';

test.describe('FCE Contact the Ministry release checks', () => {
  test('approved page, images, privacy and important destinations are present', async ({ page, request }) => {
    const response = await page.goto('/contact');
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { name: 'Contact the Ministry', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Send Us a Message' })).toBeVisible();
    await expect(page.getByRole('link', { name: /faithchangeseverythingministry@gmail.com/ })).toHaveAttribute(
      'href', 'mailto:faithchangeseverythingministry@gmail.com',
    );
    await expect(page.locator('footer').getByRole('link', { name: 'Contact the Ministry' })).toHaveAttribute('href', '/contact');
    await expect(page.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');

    for (const image of [
      '/images/contact-harbor-hero.jpg',
      '/images/contact-harbor-footer.jpg',
      '/images/contact-prayer.jpg',
      '/images/contact-help-now.jpg',
      '/images/contact-direct-email.jpg',
    ]) {
      const asset = await request.get(image);
      expect(asset.status(), `Missing approved Contact artwork: ${image}`).toBe(200);
      expect(asset.headers()['content-type']).toContain('image/');
    }
  });

  test('reason selection shows appropriate guidance without redirecting or disabling the message', async ({ page }) => {
    await page.goto('/contact');
    const select = page.locator('#contact-reason');
    const message = page.locator('#contact-message');
    await select.selectOption('prayer');
    await expect(page.locator('.contact-guidance').getByRole('link', { name: /Go to Prayer Request/ })).toHaveAttribute('href', '/prayer');
    await expect(message).toBeEditable();
    await select.selectOption('help');
    await expect(page.getByText(/This contact form is not monitored for emergencies/)).toBeVisible();
    await expect(page.getByRole('link', { name: /View Need Help Now Resources/ })).toHaveAttribute('href', '/help-support');
    await expect(page).toHaveURL(/\/contact$/);
    await expect(message).toBeEditable();
    await select.selectOption('general');
    await expect(page.getByRole('link', { name: /View Need Help Now Resources/ })).toHaveCount(0);
  });

  test('mobile layout has no horizontal overflow and the form is keyboard navigable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: 'Contact the Ministry', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Send Us a Message' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Need Prayer?' })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, 'Contact page should not overflow the phone viewport').toBeLessThanOrEqual(2);

    await page.locator('#contact-name').focus();
    await page.keyboard.press('Tab');
    await expect(page.locator('#contact-email')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#contact-reason')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#contact-message')).toBeFocused();
  });

  test('contact form fails closed when Turnstile is not configured', async ({ page }) => {
    await page.goto('/contact');
    const notice = page.getByText(/Online message delivery is being configured/);
    if (await notice.isVisible().catch(() => false)) {
      await expect(page.getByRole('button', { name: /Send Message/ })).toBeDisabled();
      await expect(page.getByRole('link', { name: /faithchangeseverythingministry@gmail.com/ })).toBeVisible();
    } else {
      await expect(page.locator('.contact-turnstile .cf-turnstile')).toBeVisible();
    }
  });
  test('invalid security token fails closed without reaching email delivery', async ({ page }) => {
    await page.goto('/contact');
    // The release-test environment deliberately has no configured Turnstile key;
    // this exercises the protected server action, not real email delivery.
    await expect(page.getByText(/Online message delivery is being configured/)).toBeVisible();
    await page.locator('#contact-email').fill('contact-security-test@example.org');
    await page.locator('#contact-reason').selectOption('general');
    await page.locator('#contact-message').fill('Verify the contact server action rejects missing security verification.');
    await page.locator('form.contact-form').evaluate(form => form.requestSubmit());
    await expect(page.locator('.contact-form-feedback.error')).toContainText('Please complete the security check');
  });
});
