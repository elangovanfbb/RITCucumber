const {
    BeforeAll,
    Before,
    After,
    AfterAll,setDefaultTimeout
} = require('@cucumber/cucumber');

const { launchBrowser } = require('../config/browserConfig');
setDefaultTimeout(30000);

let browser;

BeforeAll(async function () {

    console.log('========== BeforeAll START ==========');

    browser = await launchBrowser();

    console.log('========== BROWSER LAUNCHED ==========');
});

Before(async function () {

    console.log('========== Before START ==========');

    this.context = await browser.newContext();

    this.page = await this.context.newPage();

    console.log('========== PAGE CREATED ==========');
});

After(async function () {

    console.log('========== After START ==========');

    if (this.context) {
        await this.context.close();
    }

    console.log('========== CONTEXT CLOSED ==========');
});

AfterAll(async function () {

    console.log('========== AfterAll START ==========');

    if (browser) {
        await browser.close();
    }

    console.log('========== BROWSER CLOSED ==========');
});