import { defineConfig, devices } from '@playwright/test';
import { suite } from 'node:test';
import reportingLabs from './reporting-labs.config';


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 6,

  timeout: 30000,
  expect: { timeout: 15000 },

  reporter: [
  ['list'], 
  ['html', { outputFolder: "reports/html-report", open: "never" }],
  ["allure-playwright", { outputFolder: "allure-results",suiteTitle: true,}], 
  ['reporting-labs', reportingLabs],
  ],


  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on-first-retry',
    headless: false,

    actionTimeout: 10000,
    navigationTimeout: 5000,
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    /* Test against Chromium --branded browsers--Opera & Brave browsers. */
    //  {
    //    name: 'Opera',
    //    use: { 
    //     browserName: 'chromium',
    //     launchOptions: {
    // 	  executablePath: 'C:/Users/chand/AppData/Local/Programs/Opera/opera.exe',
    //     headless: false,
    //     },
    //  },
    // },

    //  {
    //    name: 'Brave',
    //    use: { 
    //     browserName: 'chromium',
    //     launchOptions: {
    // 	  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    //     headless: false,
    //     },
    //  },
    // },
  ],
});
