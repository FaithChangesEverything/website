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

  test("desktop grid shows three cards across while tablet and phone layouts stay responsive", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.goto("/music");
    const grid = page.locator("#singles").locator("div[class*='songGrid']");
    const measureColumns = async () => grid.evaluate(el => getComputedStyle(el).gridTemplateColumns.split(" ").filter(Boolean).length);
    expect(await measureColumns()).toBe(3);
    await expect(page.locator("#singles article")).toHaveCount(13);
    let overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(2);

    await page.setViewportSize({ width: 1280, height: 800 });
    expect(await measureColumns()).toBe(3);

    await page.setViewportSize({ width: 820, height: 1000 });
    expect(await measureColumns()).toBe(2);

    await page.setViewportSize({ width: 390, height: 844 });
    expect(await measureColumns()).toBe(1);
    overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(2);
  });

  test("all 23 Full Description windows show their approved KJV passages, themes, lyrics and artist links", async ({ page, request }) => {
    test.setTimeout(120000);
    const { readFileSync } = await import("node:fs");
    const singles = JSON.parse(readFileSync("app/music/singles.json", "utf8"));
    const tracks = JSON.parse(readFileSync("app/music/tracks.json", "utf8"));
    const allSongs = [...singles, ...tracks];

    await page.goto("/music");
    for (const row of allSongs) {
      const [id, title, story, scripture, theme, , , lyricsFilename] = row;
      const parts = scripture.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?\s+\(KJV\)$/);
      expect(parts, `Scripture must be parseable for ${title}`).not.toBeNull();
      const slug = parts[1] === "Psalm" ? "psalms" : parts[1].toLowerCase().replace(/\s+/g, "-");
      const chapter = Number(parts[2]);
      const first = Number(parts[3]);
      const last = Number(parts[4] || parts[3]);
      const response = await request.get(`/api/bible/${slug}/${chapter}`);
      expect(response.ok(), `Missing KJV passage for ${title}: ${scripture}`).toBeTruthy();
      const chapterData = await response.json();
      const verses = (chapterData.paragraphs || []).flatMap(p => p.verses || []);
      const expectedVerses = verses.filter(v => v.verse >= first && v.verse <= last);
      expect(expectedVerses.length, `Missing numbered verses for ${title}`).toBe(last - first + 1);
      const expected = expectedVerses.map(v => v.text.trim()).join(" ");

      await page.getByRole("button", { name: `Full description for ${title}`, exact: true }).click();
      const dialog = page.getByRole("dialog", { name: title, exact: true });
      await expect(dialog).toBeVisible();
      await expect(dialog.locator("p[class*='fullStory']")).toHaveText(story);
      await expect(dialog.locator("p[class*='dialogTheme']")).toHaveText(theme);
      await expect(dialog.locator("blockquote")).toHaveText(expected);
      await expect(dialog.locator("p[class*='scriptureReference']")).toHaveText(scripture);
      await expect(dialog.getByRole("link", { name: /Read in FCE Bible Reader/ }))
        .toHaveAttribute("href", `/bible/${slug}/${chapter}#v${first}`);
      await expect(dialog.getByRole("link", { name: /Open Lyrics/ }))
        .toHaveAttribute("href", `https://resources.faithchangeseverything.org/documents/fce-music-lyrics/${lyricsFilename}`);
      await expect(dialog.getByRole("link", { name: /Artist on Spotify/ }))
        .toHaveAttribute("href", "https://open.spotify.com/artist/5VccgwHF7MJCcBhOWsM161");
      await expect(dialog.getByRole("link", { name: /Artist on Apple Music/ }))
        .toHaveAttribute("href", "https://music.apple.com/us/artist/richard-ball/6792113130");
      await expect(dialog.getByRole("button", { name: /Play Song/ })).toBeVisible();
      await dialog.getByRole("button", { name: "Close song description" }).click();
      await expect(dialog).toBeHidden();
    }
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
