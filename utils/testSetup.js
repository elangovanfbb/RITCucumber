const { chromium } = require('playwright');

let browser;

async function launchBrowser() {

    if (!browser) {
        browser = await chromium.launch({
            headless: false
        });
    }

    const context = await browser.newContext();

    const page = await context.newPage();

    return {
        context,
        page
    };
}

async function closeBrowser() {

    if (browser) {
        await browser.close();
        browser = null;
    }

}

module.exports = {
    launchBrowser,
    closeBrowser
};
