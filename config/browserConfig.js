const {
    chromium,
    firefox,
    webkit
} = require('playwright');

const config = require('./config');

async function launchBrowser() {

    console.log(
        'Browser from config:',
        config.browser
    );

    console.log(
        'Headless from config:',
        config.headless
    );

    switch (config.browser) {

        case 'chromium':

            console.log('>>> Launching Chromium');

            return await chromium.launch({
                headless: config.headless
            });

        case 'firefox':

            console.log('>>> Launching Firefox');

            return await firefox.launch({
                headless: config.headless
            });

        case 'webkit':

            console.log('>>> Launching WebKit');

            return await webkit.launch({
                headless: config.headless
            });

        default:

            throw new Error(
                `Unsupported browser: ${config.browser}`
            );
    }
}

module.exports = {
    launchBrowser
};