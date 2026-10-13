import {test,expect} from '@playwright/test';
const pilot='/reading-plans/30-days-with-jesus';
test.describe('FCE Bible Reading Plans pilot',()=>{
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
  test('every approved daily reading opens and has FCE Reader link',async({page})=>{
    for(let n=1;n<=30;n++){
      await page.goto(`${pilot}/day/${n}`);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.getByText('KEY VERSE')).toBeVisible();
      await expect(page.getByText('Reading Focus')).toBeVisible();
      const href=await page.getByRole('link',{name:/Open in FCE Bible Reader/}).getAttribute('href');
      expect(href).toMatch(/^https:\/\/faithchangeseverything\.org\/bible\/[a-z0-9-]+\/\d+(#v\d+)?$/);
    }
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
        await expect(page.locator(`a[href="${pilot}/day/${n}"]`)).toBeVisible();
      }
    }
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
