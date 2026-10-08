const { BasePage } = require("./BasePage")


class DashboardPage extends BasePage{

    constructor(page)
    {
        super(page)
        this.page = page
        this.dashboard = this.page.locator(".oxd-topbar-header-breadcrumb-module")
        this.pim = this.page.locator(".oxd-main-menu-item").filter({hasText : "PIM"})
    }

    async verifyDashboard()
    {
 return await this.getText(this.dashboard)
    }

    async navigateToPim()
    {
        await this.click(this.pim)
    }
}

module.exports = {DashboardPage}