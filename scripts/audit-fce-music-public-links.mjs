import { readFileSync } from "node:fs";

const singles = JSON.parse(readFileSync("app/music/singles.json", "utf8"));
const tracks = JSON.parse(readFileSync("app/music/tracks.json", "utf8"));
const album = JSON.parse(readFileSync("app/music/album.json", "utf8"));

const base = "https://resources.faithchangeseverything.org/";
const spec = [
  ["audio", "audio/music/listening/", 5, "audio/mpeg"],
  ["cover", "images/music-covers/square/", 6, "image/png"],
  ["lyrics", "documents/fce-music-lyrics/", 7, "application/pdf"],
];
const requests = [];
for (const row of [...singles, ...tracks]) {
  for (const [kind, prefix, col, mime] of spec) {
    requests.push({ kind, title: row[1], url: base + prefix + row[col], mime });
  }
}
if ([...singles, ...tracks].some(row => !/^pdf\\/[^/]+\\.pdf$/.test(row[7]))) {\n  throw new Error("REV1.3 song lyrics must use PDF paths under pdf/.");\n}\nrequests.push({ kind: "album cover", title: album.title, url: album.cover, mime: "image/png" });

if (singles.length !== 13 || tracks.length !== 10 || requests.length !== 70) {
  throw new Error("Unexpected launch inventory; must check 13 singles, 10 album tracks, and one album cover.");
}

const results = [];
let cursor = 0;
async function checkOne(asset) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 16000);
  try {
    let res = await fetch(asset.url, { method: "HEAD", signal: controller.signal, redirect: "follow" });
    let method = "HEAD";
    // Some public object stores disallow HEAD even though a normal GET works.
    if ([403, 405, 501].includes(res.status)) {
      res = await fetch(asset.url, { headers: { Range: "bytes=0-127" }, signal: controller.signal, redirect: "follow" });
      method = "GET Range";
      await res.body?.cancel();
    }
    const ct = res.headers.get("content-type") || "";
    const length = res.headers.get("content-length");
    const success = res.ok && ct.toLowerCase().startsWith(asset.mime.toLowerCase()) && (length === null || Number(length) > 0);
    return { kind: asset.kind, title: asset.title, status: res.status, type: ct, method, success,
      url: asset.url, length };
  } catch (e) {
    return { kind: asset.kind, title: asset.title, success: false, error: String(e), url: asset.url };
  } finally {
    clearTimeout(timeout);
  }
}
async function worker() {
  while (cursor < requests.length) {
    const index = cursor++;
    results[index] = await checkOne(requests[index]);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
const totals = Object.fromEntries(["audio", "cover", "lyrics", "album cover"].map(kind => {
  const subset = results.filter(result => result.kind === kind);
  return [kind, { tested: subset.length, passed: subset.filter(x => x.success).length }];
}));
const failures = results.filter(x => !x.success);
const statuses = Object.fromEntries([...new Set(results.map(x => x.status))].map(code => [String(code),results.filter(x=>x.status===code).length]));
console.log("FCE MUSIC PUBLIC ASSET AUDIT:", JSON.stringify({ totals, httpStatuses: statuses, failures }, null, 2));
if (failures.length) process.exitCode = 1;
