import {defineConfig,devices} from '@playwright/test';
const releaseMode=process.env.FCE_RELEASE_TEST==='1';
export default defineConfig({
 testDir:'./tests',
 timeout:45000,
 retries:1,
 use:{baseURL:'http://127.0.0.1:3000',trace:'retain-on-failure'},
 projects:[{name:'chromium',use:{...devices['Desktop Chrome']}}],
 webServer:{command:releaseMode?'./node_modules/.bin/next start --hostname 127.0.0.1 --port 3000':'./node_modules/.bin/next dev --hostname 127.0.0.1 --port 3000',url:'http://127.0.0.1:3000/reading-plans',reuseExistingServer:!process.env.CI,timeout:180000,env:{NEXT_PUBLIC_SUPABASE_URL:'https://example.supabase.co',NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:'pilot-ci-placeholder'}},
});
