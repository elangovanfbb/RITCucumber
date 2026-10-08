//const { expect } = require('playwright');
const { expect } = require('chai');

const {
    launchBrowser
} = require('../utils/testSetup');
const {LoginPage} = require('../Pages/LoginPage');
const {DashboardPage} = require('../Pages/DashboardPage');
const { assert } = require('node:console');

describe('Login Tests', function () {

    let context;
    let page;
    let loginPage;

    beforeEach(async function () {

        const browserSetup = await launchBrowser();

        context = browserSetup.context;
        page = browserSetup.page;

        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page)

    });

    afterEach(async function () {

        await context.close();

    });

    it('Login to application', async function () {

        await loginPage.launchApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await loginPage.enterUsername("Admin")
        await loginPage.enterPassword("admin123")
        await loginPage.clickingLoginButton()
        await expect(await dashboardPage.verifyDashboard()).to.equal("Dashboard")
        

    });

});
