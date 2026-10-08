module.exports = {

    default: {

        paths: [
            'features/**/*.feature'
        ],

        require: [
            'support/*.js',
            'step-definitions/*.js'
        ],

        format: [
            'pretty',
            'json:reports/cucumber.json'
        ],

        timeout: 30000,

        parallel: 4,

        retry: 2,

        publishQuiet: true,

        worldParameters: {
            environment: process.env.ENV || 'qa',
            browser: process.env.BROWSER || 'chromium'
        }
    },

    smoke: {

        paths: [
            'features/**/*.feature'
        ],

        require: [
            'support/*.js',
            'step-definitions/*.js'
        ],

        format: [
            'pretty',
            'json:reports/cucumber.json'
        ],

        timeout: 30000,

        tags: '@smoke',

        parallel: 1,

        retry: 1,

        publishQuiet: true,

        worldParameters: {
            environment: process.env.ENV || 'qa',
            browser: process.env.BROWSER || 'chromium'
        }
    }
};