import { test, expect } from "@playwright/test";

test.describe("FCE Music Library — REV1.2 launch", () => {
  test("page uses approved stage-lights hero, complete song inventory and album sequence", async ({ page, request }) => {
    const response = await page.goto("/music");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { name: "FCE Music Library", exact: true })).toHaveText("FCE Music Library");
    await expect(page.locator("#singles article")).toHaveCount(13);
    await expect(page.locator("#album-tracks article")).toHaveCount(10);
    await expect(page.getByRole("heading", { name: "On the Frontline for Christ" })).toBeVisible();
    const tracks = await page.locator("#album-tracks article h3").allTextContents();
    expect(tracks).toEqual([
      "You Changed Everything", "What Grace Can Do", "The Final Word", "Whose I Am",
      "I Don't Need to See the Road", "Don't Let Me Miss It", "I Can't Surrender for You",
      "Something More", "Frontline", "His Name Is Jesus",
    ]);

    const hero = await request.get("/images/music/hero/fce-musichero.png");
    expect(hero.status()).toBe(200);
    expect(hero.headers()["content-type"]).toContain("image/");
  });

  test("artwork and audio use authoritative Cloudflare R2 file paths", async ({ page }) => {
    await page.goto("/music");
    const card = page.locator("#singles article").first();
    await expect(card.getByRole("heading", { name: "When You Can't Stand" })).toBeVisible();
    await expect(card.locator("img")).toHaveAttribute(
      "src", /resources\.faithchangeseverything\.org.*img-2026-0107-cant-stand-sq\.png|_next\/image/,
    );
    await expect(card.locator("audio")).toHaveAttribute(
      "src", "https://resources.faithchangeseverything.org/audio/music/listening/song-2026-0001-cant-stand.mp3",
    );
    await expect(page.locator("audio")).toHaveCount(23);
    await expect(page.locator("audio[preload='none']")).toHaveCount(23);
  });

  test("song story dialog includes complete story, Scripture lookup and links, and Escape closes it", async ({ page }) => {
    await page.route("**/api/bible/isaiah/41", route => route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ paragraphs: [{ verses: [{ verse: 10, text: "Fear thou not; for I am with thee." }] }] }),
    }));
    await page.goto("/music");
    await page.getByRole("button", { name: "Full description for When You Can't Stand" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Fear thou not; for I am with thee.")).toBeVisible();
    await expect(dialog.getByText("Isaiah 41:10 (KJV)")).toBeVisible();
    await expect(dialog.getByRole("link", { name: /Open Lyrics/ })).toHaveAttribute("href", /doc-2026-00231-when-u-cant-stand-lyrics\.docx$/);
    await expect(dialog.getByRole("link", { name: /FCE Bible Reader/ })).toHaveAttribute("href", "/bible/isaiah/41#v10");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("album story is expandable and streaming buttons clearly identify artist destination", async ({ page }) => {
    await page.goto("/music");
    await page.locator("#album summary").click();
    await expect(page.getByText(/Act IV — Our Living Hope/)).toBeVisible();
    const spotify = page.getByRole("link", { name: /Richard Ball on Spotify/ });
    await expect(spotify).toHaveAttribute("href", "https://open.spotify.com/artist/5VccgwHF7MJCcBhOWsM161");
    const apple = page.getByRole("link", { name: /Richard Ball on Apple Music/ });
    await expect(apple).toHaveAttribute("href", "https://music.apple.com/us/artist/richard-ball/6792113130");
  });

  test("phone viewport has one-column cards and no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/music");
    await expect(page.locator("#singles article").first()).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      doc: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(dimensions.doc - dimensions.viewport).toBeLessThanOrEqual(2);
    await page.locator("#album-tracks article").first().getByRole("button", { name: /Full description/ }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Close song description" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});
