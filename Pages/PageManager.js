class PageManager {

    constructor(page) {

        this.page = page;

        this.loginPage =
            new LoginPage(page);

        this.dashboardPage =
            new DashboardPage(page);

        this.pimPage =
            new PimPage(page);
    }
}

module.exports = {PageManager}