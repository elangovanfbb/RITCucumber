const{ Given, When, Then} = require('@cucumber/cucumber');
const { LoginPage } = require('../Pages/LoginPage');
const { log } = require('node:console');
const{expect} = require('@playwright/test')
const assert = require('assert');
const { DashboardPage } = require('../Pages/DashboardPage');
const {PimPage} = require('../Pages/PimPage');
const config = require('../config/config');

Given('I open the OrangeHRM application',async function () {

  this.loginPage = new LoginPage(this.page)
  await this.loginPage.launchApplication(config.baseURL)
 
});

When('I enter username {string}', async function (userName) {

await this.loginPage.enterUsername(userName)
});

When('I enter password {string}', async function (password) {
  await this.loginPage.enterPassword(password)
});

When('I click the login button',async function () {

  await this.loginPage.clickingLoginButton()
  
});

Then('I should see the OrangeHRM dashboard',async function () {


  this.dashboardPage = new DashboardPage(this.page)
  await assert.strictEqual(await this.dashboardPage.verifyDashboard(), "Dashboard")
//   await this.dashboardPage.navigateToPim()
//   this.pimPage = new PimPage(this.page)
//  await this.pimPage.clickOnAddEmployee()
});