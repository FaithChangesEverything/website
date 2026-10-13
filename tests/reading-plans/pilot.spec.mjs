import {test,expect} from '@playwright/test';
const pilot='/reading-plans/30-days-with-jesus';
test.describe('FCE Bible Reading Plans pilot',()=>{
  test('shared FCE header provides Bible dropdown across different page families',async({page})=>{
    for(const path of ['/bible','/reading-plans','/bible-studies','/journey']){
      await page.goto(path);
      const nav=page.getByRole('navigation',{name:'Primary navigation'});
      await expect(nav.getByRole('link',{name:'Bible',exact:true})).toHaveAttribute('href','/bible');
      await nav.getByText('▾').click();
      await expect(nav.getByRole('link',{name:'Read the Bible'})).toHaveAttribute('href','/bible');
      await expect(nav.getByRole('link',{name:'Bible Reading Plans'})).toHaveAttribute('href','/reading-plans');
      await expect(nav.getByRole('link',{name:'Bible Study Library'})).toHaveAttribute('href','/bible-studies');
    }
    await page.goto('/journey');
    const nav=page.getByRole('navigation',{name:'Primary navigation'});
    await nav.getByText('▾').click();
    await nav.getByRole('link',{name:'Bible Reading Plans'}).click();
    await expect(page).toHaveURL(/\/reading-plans$/);
  });
  test('shared mobile header lets visitors access Bible menus',async({page})=>{
    await page.setViewportSize({width:390,height:844});
    await page.goto('/journey');
    await page.locator('details[class*="mobileMenu"] > summary').click();
    const mobile=page.getByRole('navigation',{name:'Mobile primary navigation'});
    await mobile.locator('details > summary').filter({hasText:'Bible'}).click();
    await expect(mobile.getByRole('link',{name:'Bible Reading Plans'})).toBeVisible();
    await expect(mobile.getByRole('link',{name:'Bible Study Library'})).toBeVisible();
    await mobile.getByRole('link',{name:'Bible Study Library'}).click();
    await expect(page).toHaveURL(/\/bible-studies$/);
  });
  test('library renders and filters approved plan inventory',async({page})=>{
    await page.goto('/reading-plans');
    await expect(page.getByRole('heading',{name:'Bible Reading Plans'})).toBeVisible();
    await expect(page.getByText('22 plans found')).toBeVisible();
    await page.getByRole('button',{name:'10-Day Plans'}).click();
    await expect(page.getByText('10 plans found')).toBeVisible();
    await page.getByRole('button',{name:'All 22 Plans'}).click();
    await page.getByRole('searchbox').fill('30 Days with Jesus');
    await expect(page.getByText('1 plan found')).toBeVisible();
    await expect(page.getByRole('link',{name:/Explore This Plan/})).toHaveAttribute('href',pilot);
  });
  test('all plans are accessible and invalid day URLs remain blocked',async({page})=>{
    await page.goto('/reading-plans');
    await page.getByRole('button',{name:'10-Day Plans'}).click();
    await expect(page.getByText('10 plans found')).toBeVisible();
    await expect(page.getByRole('link',{name:/Explore This Plan/})).toHaveCount(6);
    await page.goto('/reading-plans/30-days-of-prayer/day/1');
    await expect(page.getByRole('heading',{name:'Called to Pray'})).toBeVisible();
    for(const path of [
      '/reading-plans/unknown-plan',
      '/reading-plans/30-days-of-prayer/day/31',
      '/reading-plans/30-days-with-jesus/day/31',
      '/reading-plans/30-days-with-jesus/day/0',
      '/reading-plans/30-days-with-jesus/day/not-a-day'
    ]){
      const response=await page.goto(path);
      expect(response?.status(),`Unexpected route exposure: ${path}`).toBe(404);
    }
  });
  test('top All 22 Plans control shows the full catalog without the bottom expansion button',async({page})=>{
    await page.goto('/reading-plans');
    const cards=page.locator('article[class*="planCard"]');
    await expect(cards).toHaveCount(6);
    await page.getByRole('button',{name:'All 22 Plans',exact:true}).click();
    await expect(cards).toHaveCount(22);
    await expect(page.getByText('22 plans found')).toBeVisible();
    await expect(page.getByRole('button',{name:'Show Fewer Plans'})).toBeVisible();
    await page.getByRole('button',{name:'Show Fewer Plans'}).click();
    await expect(cards).toHaveCount(6);
    await expect(page.getByRole('group',{name:'Filter plans by length'})).toBeInViewport();
    await expect(cards.first()).toBeInViewport();
    await page.getByRole('button',{name:'View All 22 Plans'}).click();
    await expect(cards).toHaveCount(22);
  });
  test('every approved daily reading opens and has FCE Reader link',async({page})=>{
    for(let n=1;n<=30;n++){
      await page.goto(`${pilot}/day/${n}`);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.getByText('KEY VERSE')).toBeVisible();
      await expect(page.getByText('Reading Focus')).toBeVisible();
      const href=await page.getByRole('link',{name:/Open in FCE Bible Reader/}).getAttribute('href');
      expect(href).toMatch(new RegExp(`^/bible/[a-z0-9-]+/\\d+\\?returnTo=%2Freading-plans%2F30-days-with-jesus%2Fday%2F${n}(#v\\d+)?$`));
    }
  });
  test('daily Scripture link opens integrated KJV chapter and highlights assigned verse',async({page})=>{
    await page.goto(`${pilot}/day/1`);
    const link=page.getByRole('link',{name:/Open in FCE Bible Reader/});
    await expect(link).toHaveAttribute('href','/bible/john/1?returnTo=%2Freading-plans%2F30-days-with-jesus%2Fday%2F1#v1');
    await link.click();
    await expect(page).toHaveURL(/\/bible\/john\/1\?returnTo=.*#v1$/);
    await expect(page.getByRole('heading',{name:'FCE Bible Reader'})).toBeVisible();
    await expect(page.getByText('John — Chapter 1')).toBeVisible();
    await expect(page.locator('#v1')).toContainText('In the beginning was the Word');
    await expect(page.locator('#v1')).toHaveClass(/highlight/);
    await page.getByRole('link',{name:'← Return to Reading Plan'}).click();
    await expect(page).toHaveURL(new RegExp(`${pilot}/day/1$`));
    await expect(page.getByRole('heading',{name:'The Word Became Flesh'})).toBeVisible();
  });
  test('direct Bible visitors have no plan-return control and unsafe URLs are rejected',async({page})=>{
    await page.goto('/bible/john/1');
    await expect(page.getByRole('link',{name:/Return to Reading Plan/})).toHaveCount(0);
    await page.goto('/bible/john/1?returnTo=https%3A%2F%2Fevil.example%2F');
    await expect(page.getByRole('link',{name:/Return to Reading Plan/})).toHaveCount(0);
  });
  test('progress persists after refresh and on plan overview; reset requires confirmation',async({page})=>{
    await page.goto(`${pilot}/day/1`);
    await page.getByRole('button',{name:'Mark Day 1 Complete'}).click();
    await expect(page.getByText('1 of 30 days complete')).toBeVisible();
    await page.reload();
    await expect(page.getByRole('button',{name:/Day Complete — Undo/})).toBeVisible();
    await page.goto(pilot);
    await expect(page.getByText('1 of 30 days complete. Read at your own pace.')).toBeVisible();
    await expect(page.getByRole('link',{name:/Continue Reading/})).toHaveAttribute('href',`${pilot}/day/2`);
    await page.getByRole('button',{name:'Reset progress'}).click();
    await expect(page.getByText(/Erase all completed days/)).toBeVisible();
    await page.getByRole('button',{name:'Cancel'}).click();
    await expect(page.getByText('1 of 30 days complete. Read at your own pace.')).toBeVisible();
    await page.getByRole('button',{name:'Reset progress'}).click();
    await page.getByRole('button',{name:'Yes, erase'}).click();
    await expect(page.getByText('0 of 30 days complete. Read at your own pace.')).toBeVisible();
  });
  test('all 30 day assignments show in groups of 10',async({page})=>{
    await page.goto(pilot);
    for(let i=0;i<3;i++){
      await page.getByRole('button',{name:`Days ${i*10+1}–${(i+1)*10}`}).click();
      for(let n=i*10+1;n<=(i+1)*10;n++){
        await expect(page.locator(`a[class*="lessonLink"][href="${pilot}/day/${n}"]`)).toBeVisible();
      }
    }
  });
  test('completion data stays in local browser storage, isolated per browser context',async({browser})=>{
    const a=await browser.newContext();
    const b=await browser.newContext();
    try {
      const first=await a.newPage();
      const other=await b.newPage();
      const writes=[];
      first.on('request',request=>{
        if(request.method()!=='GET' && /reading.plan|progress|completion|save.progress/i.test(request.url()))writes.push(request.url());
      });
      await first.goto(`${pilot}/day/1`);
      await first.getByRole('button',{name:'Mark Day 1 Complete'}).click();
      const stored=await first.evaluate(()=>Object.entries(localStorage).filter(([k])=>k.startsWith('fce-reading-plan-progress-v1:')));
      expect(stored).toEqual([['fce-reading-plan-progress-v1:30-days-with-jesus','[1]']]);
      expect(writes).toEqual([]);
      await other.goto(pilot);
      await expect(other.getByText('0 of 30 days complete. Read at your own pace.')).toBeVisible();
      await first.reload();
      await expect(first.getByRole('button',{name:/Day Complete — Undo/})).toBeVisible();
    } finally {await a.close();await b.close();}
  });
  test('all 22 plans have working overviews and first daily readings',async({page})=>{
    await page.goto('/reading-plans');
    await page.getByRole('button',{name:'All 22 Plans',exact:true}).click();
    const hrefs=await page.locator('article[class*="planCard"] a').evaluateAll(links=>links.map(a=>a.getAttribute('href')));
    expect(hrefs).toHaveLength(22);
    for(const url of hrefs){
      await page.goto(url);
      await expect(page.getByRole('heading',{name:'Your Progress'})).toBeVisible();
      await page.goto(url+'/day/1');
      await expect(page.getByText('KEY VERSE')).toBeVisible();
      await expect(page.getByRole('link',{name:/FCE Bible Reader/}).first()).toHaveAttribute('href',/^\\/bible\\//);
    }
  });
  test('multiple Scripture assignments and key verses have separate reader links',async({page})=>{
    await page.goto('/reading-plans/getting-to-know-jesus/day/5');
    await expect(page.getByRole('link',{name:/Read Isaiah 53:3/})).toBeVisible();
    await expect(page.getByRole('link',{name:/Read Mark 15:21/})).toBeVisible();
    await expect(page.getByRole('link',{name:/Read Key Verse in FCE Bible Reader/})).toHaveAttribute('href',/\\/bible\\/isaiah\\/53/);
  });
  test('progress remains separate for different reading plans',async({page})=>{
    await page.goto('/reading-plans/getting-to-know-jesus/day/1');
    await page.getByRole('button',{name:'Mark Day 1 Complete'}).click();
    await page.goto('/reading-plans/30-days-of-prayer/day/1');
    await expect(page.getByText('0 of 30 days complete')).toBeVisible();
    await page.goto('/reading-plans/getting-to-know-jesus/day/1');
    await expect(page.getByRole('button',{name:/Day Complete — Undo/})).toBeVisible();
  });
  test('mobile layout stays in viewport and privacy text visible',async({page})=>{
    await page.setViewportSize({width:390,height:844});
    for(const path of ['/reading-plans',pilot,`${pilot}/day/1`]){
      await page.goto(path);
      await expect(page.locator('main')).toBeVisible();
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2);
      expect(overflow,`Horizontal overflow on ${path}`).toBe(false);
    }
    await expect(page.getByText('Your Progress & Your Privacy')).toBeVisible();
    await expect(page.getByText(/Refreshing or reopening the page will not erase saved progress/)).toBeVisible();
  });
});
