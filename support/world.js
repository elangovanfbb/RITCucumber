const {
    setWorldConstructor
} = require('@cucumber/cucumber');

class CustomWorld {

    constructor() {

        this.browser = null;
        this.context = null;
        this.page = null;

        this.loginPage = null;
        this.dashboardPage = null;
        this.pimPage = null;

        this.testData = {};
    }
}

setWorldConstructor(CustomWorld);