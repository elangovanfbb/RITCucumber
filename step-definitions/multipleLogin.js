
const {Given, When,Then} = require('@cucumber/cucumber')
const { LoginPage } = require('../Pages/LoginPage');
const { log } = require('node:console');
const{expect} = require('@playwright/test')
const assert = require('assert');


Given('Launch a site and navigate to login page', async function () {

    this.loginPage = new LoginPage(this.page)
  await this.loginPage.launchApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
});

When('Enter username {string}', async function (username) {
   await this.loginPage.enterUsername(username)
  
});

When('Enter password {string}', async function (password) {
    await this.loginPage.enterPassword(password)
  
});

When('Click on Login button',async function () {
   await this.loginPage.clickingLoginButton()
 
});

Then('Login error should display', async function () {
    await assert.strictEqual(await this.loginPage.checkInvalidLoginError(), "Invalid credentials")
  
});
