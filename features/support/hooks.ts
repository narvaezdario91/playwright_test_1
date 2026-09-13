import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { engage } from '@serenity-js/core';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import * as dotenv from 'dotenv';
import { Elenco } from './elenco';

dotenv.config();

const timeout = parseInt(process.env.DEFAULT_TIMEOUT || '30000', 10);
setDefaultTimeout(timeout);

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
    const browserType = process.env.BROWSER || 'chromium';
    const headless = process.env.HEADLESS !== 'false';

    switch (browserType.toLowerCase()) {
        case 'firefox':
            browser = await firefox.launch({ headless });
            break;
        case 'webkit':
            browser = await webkit.launch({ headless });
            break;
        case 'chromium':
        default:
            browser = await chromium.launch({ headless });
            break;
    }
});

Before(async (scenario) => {
    const tags = scenario.pickle.tags.map(t => t.name);
    const isUiScenario = tags.includes('@ui') || !tags.includes('@api');

    if (isUiScenario && browser) {
        context = await browser.newContext();
        page = await context.newPage();
        engage(new Elenco(page));
    } else {
        engage(new Elenco());
    }
});

After(async () => {
    if (page) {
        await page.close().catch(() => {});
    }
    if (context) {
        await context.close().catch(() => {});
    }
});

AfterAll(async () => {
    if (browser) {
        await browser.close().catch(() => {});
    }
});
