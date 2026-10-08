class BasePage {
    constructor(page) {
        this.page = page;
    }

    async fill(locator, text) {
        await locator.fill(text);
    }

    async click(locator) {
        await locator.click();
    }

    async goTo(url) {
        await this.page.goto(url);
    }
    async getText(locator) {
        return await locator.textContent();
    }

    async isVisible(locator) {
    return await locator.isVisible();
  }
}

module.exports = { BasePage };
