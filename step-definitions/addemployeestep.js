
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../Pages/LoginPage');
const { log } = require('node:console');
const { expect } = require('@playwright/test')
const assert = require('assert');
const { DashboardPage } = require('../Pages/DashboardPage');
const { PimPage } = require('../Pages/PimPage')
const testData =
    require('../utils/testData');

Given('Launch a site and login to the application', async function () {

    this.loginPage = new LoginPage(this.page)
    await this.loginPage.launchApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await this.loginPage.enterUsername(testData.employee.username)
    await this.loginPage.enterPassword(testData.employee.password)
    await this.loginPage.clickingLoginButton()
});

When('Navigate to PIM page', async function () {
    this.dashboardPage = new DashboardPage(this.page)
    this.dashboardPage.navigateToPim()
    
    


});

When('Navigate to Add Employee page', async function () {

    this.pimPage = new PimPage(this.page)
    await this.pimPage.clickOnAddEmployee()
});

When('Fill the employee details and save the entry', async function () {

    await this.pimPage.enterFirstName("Elan")
    await this.pimPage.enterMiddleName("Go")
    await this.pimPage.enterLastName("Van")
    await this.pimPage.clickSaveButton()

});

Then('Verify that success message is displayed', async function () {

   await this.page.waitForTimeout(1000);
    await expect(await this.pimPage.checkSuccessMessageVisibility()).toBeTruthy()

});