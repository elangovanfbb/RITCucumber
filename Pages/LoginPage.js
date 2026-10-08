const {BasePage} = require('../Pages/BasePage')

class LoginPage extends BasePage{

    constructor(page)
    {
        super(page)
        this.page = page
        this.userName = this.page.locator("[name='username']")
        this.password = this.page.locator("[name='password']")
        this.loginButton = this.page.locator(".orangehrm-login-button")
        this.invalidError = this.page.getByText("Invalid credentials")
    }

    async launchApplication(url)
    {
        await this.page.goto(url)
    }

    async enterUsername(username)
    {
        await this.fill(this.userName, username)
    }

    async enterPassword(password)
    {
        await this.fill(this.password, password)
    }
    async clickingLoginButton()
    {
        await this.click(this.loginButton)
    }

   async checkInvalidLoginError()
    {
return await this.getText(this.invalidError)
    }
}

module.exports = {LoginPage}