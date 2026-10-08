const { BasePage } = require("./BasePage");

class PimPage extends BasePage{

    constructor(page)
    {
        super(page)
        this.page = page;
        this.addEmployee = this.page.getByText("Add Employee")
        this.successMessage = this.page.getByText("Successfully Saved")
        this.firstName = this.page.locator("[name='firstName']")
        this.middleName = this.page.locator("[name='middleName']")
        this.lastName = this.page.locator("[name='lastName']")
        this.saveButton = this.page.getByRole("button" , {name : " Save "})

    }

    async clickOnAddEmployee()
    {
        await this.click(this.addEmployee)
    }

    async verifytheSuccessMessage()
    {
        await this.isVisible(this.successMessage)
    }

    async enterFirstName(value)
    {
        await this.fill(this.firstName, value)
    }
    async enterMiddleName(value)
    {
        await this.fill(this.middleName, value)
    }
    async enterLastName(value)
    {
        await this.fill(this.lastName, value)
    }

    async clickSaveButton()
    {
        await this.click(this.saveButton)
    }

    async checkSuccessMessageVisibility()
    {
        await this.page.waitForTimeout(1000);
        console.log("RESULT " , await this.isVisible(this.successMessage))
        return await this.isVisible(this.successMessage)
    }
}

module.exports = {PimPage}