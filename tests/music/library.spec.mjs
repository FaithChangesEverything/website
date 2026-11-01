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
    await card.getByRole("button", { name: "Play Song: When You Can't Stand" }).click();
    await expect(page.locator("audio")).toHaveCount(1);
    await expect(page.locator("audio")).toHaveAttribute(
      "src", "https://resources.faithchangeseverything.org/audio/music/listening/song-2026-0001-cant-stand.mp3",
    );
    await expect(page.locator("audio[preload='none']")).toHaveCount(1);
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


  test("listeners can create a saved playlist, add singles and album tracks, reorder and keep it after reload", async ({ page }) => {
    await page.goto("/music");
    await page.locator("#new-playlist-name").fill("My Encouragement Songs");
    await page.getByRole("button", { name: "Create", exact: true }).click();
    await expect(page.getByRole("heading", { name: "My Encouragement Songs" })).toBeVisible();

    await page.getByRole("button", { name: "Add When You Can't Stand to playlist" }).click();
    await page.getByRole("dialog", { name: "Add to Playlist" }).getByRole("button", { name: /My Encouragement Songs/ }).click();
    await page.getByRole("button", { name: "Add Thankful for the Fall to playlist" }).click();
    await page.getByRole("dialog", { name: "Add to Playlist" }).getByRole("button", { name: /My Encouragement Songs/ }).click();
    await page.getByRole("button", { name: "Add You Changed Everything to playlist" }).click();
    await page.getByRole("dialog", { name: "Add to Playlist" }).getByRole("button", { name: /My Encouragement Songs/ }).click();

    const rows = page.locator("#my-playlists ol li");
    await expect(rows).toHaveCount(3);
    await page.getByRole("button", { name: "Move You Changed Everything up" }).click();
    await expect(rows.nth(1)).toContainText("You Changed Everything");
    await page.reload();
    await expect(page.getByRole("heading", { name: "My Encouragement Songs" })).toBeVisible();
    await expect(page.locator("#my-playlists ol li")).toHaveCount(3);
    await expect(page.locator("#my-playlists ol li").nth(1)).toContainText("You Changed Everything");
    const stored = await page.evaluate(() => window.localStorage.getItem("fce-music-playlists-v1"));
    expect(JSON.parse(stored)).toHaveLength(1);
    await page.getByRole("button", { name: "▶ Play List" }).click();
    await expect(page.getByText("Track 1 of 3")).toBeVisible();
    await page.getByRole("button", { name: "Next track" }).click();
    await expect(page.getByText("Track 2 of 3")).toBeVisible();
    await page.getByRole("button", { name: "Remove You Changed Everything from My Encouragement Songs" }).click();
    await expect(rows).toHaveCount(2);
  });

  test("Play Album queues all ten tracks in the approved sequence and the modal can play its song", async ({ page }) => {
    await page.goto("/music");
    await page.getByRole("button", { name: /Play the Whole Album/ }).click();
    await expect(page.getByText("Track 1 of 10")).toBeVisible();
    await expect(page.locator('aside[aria-label="FCE Music Player"]')).toContainText("You Changed Everything");
    await page.getByRole("button", { name: "Next track" }).click();
    await expect(page.locator('aside[aria-label="FCE Music Player"]')).toContainText("What Grace Can Do");

    await page.getByRole("button", { name: "Full description for Frontline" }).click();
    const dialog = page.getByRole("dialog", { name: /Frontline/ });
    await dialog.getByRole("button", { name: "▶ Play Song" }).click();
    await expect(page.locator('aside[aria-label="FCE Music Player"] audio')).toHaveAttribute("src", /song-2026-0020-frontline\.mp3$/);
    await dialog.getByRole("button", { name: /Add to Playlist/ }).click();
    await expect(page.getByRole("dialog", { name: "Add to Playlist" })).toBeVisible();
    await page.locator("#picker-new-list").fill("Frontline Favorites");
    await page.getByRole("button", { name: "Create & Add" }).click();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("heading", { name: "Frontline Favorites" })).toBeVisible();
  });

  test("album naturally advances to the next track when a song finishes", async ({ page }) => {
    await page.goto("/music");
    await page.getByRole("button", { name: /Play the Whole Album/ }).click();
    const player = page.locator('aside[aria-label="FCE Music Player"]');
    await expect(player).toContainText("Track 1 of 10");
    await player.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
    await expect(player).toContainText("Track 2 of 10");
    await expect(player).toContainText("What Grace Can Do");
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
