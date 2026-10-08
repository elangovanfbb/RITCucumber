module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            'support/*.js',
            'step-definitions/*.js'
        ],
       format: [
    'pretty',
    'allure-cucumberjs/reporter',
    'json: reports/cucumber.json'
],
timeout : 30000,
//tags : '@smoke or @regression',
parallel : 4,
publish : true,
retry : 2,
//dryRun : true,
worldpParameters : {
    environment : 'staging',
    browser : 'chrome'
}
    },
    smoke : {
        paths: ['features/**/*.feature'],
        require: [
            'support/*.js',
            'step-definitions/*.js'
        ],
       format: [
    'pretty',
    'allure-cucumberjs/reporter',
    'json: reports/cucumber.json'
],
timeout : 30000,
tags : '@smoke',
parallel : 1,
worldpParameters : {
    environment : 'staging',
    browser : 'chrome'
}
    }
};
