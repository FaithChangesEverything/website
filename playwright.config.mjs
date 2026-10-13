import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/reading-plans',
 timeout:45000,
 retries:1,
 use:{baseURL:'http://127.0.0.1:3000',trace:'retain-on-failure'},
 projects:[{name:'chromium',use:{...devices['Desktop Chrome']}}],
 webServer:{command:'./node_modules/.bin/next dev --hostname 127.0.0.1 --port 3000',url:'http://127.0.0.1:3000/reading-plans',reuseExistingServer:!process.env.CI,timeout:180000,env:{NEXT_PUBLIC_SUPABASE_URL:'https://example.supabase.co',NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:'pilot-ci-placeholder'}},
});
