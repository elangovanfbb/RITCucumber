const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// --------------------------------------------------
// 1. Read environment from command line
// --------------------------------------------------

const environment = (
    process.env.ENV || 'qa'
).trim().toLowerCase();

// --------------------------------------------------
// 2. Build .env file path
// --------------------------------------------------

const envFile = path.join(
    process.cwd(),
    `.env.${environment}`
);

// --------------------------------------------------
// 3. Validate environment file
// --------------------------------------------------

console.log('=================================');
console.log('CONFIG DEBUG');
console.log('Current directory :', process.cwd());
console.log('ENV               :', process.env.ENV);
console.log('Environment       :', environment);
console.log('Env file          :', envFile);
console.log('File exists       :', fs.existsSync(envFile));
console.log('=================================');

if (!fs.existsSync(envFile)) {
    throw new Error(
        `Environment file not found: ${envFile}`
    );
}

// --------------------------------------------------
// 4. Load environment variables
// --------------------------------------------------

const result = dotenv.config({
    path: envFile
});

if (result.error) {
    throw new Error(
        `Unable to load environment file: ${envFile}\n${result.error.message}`
    );
}

// --------------------------------------------------
// 5. Build application configuration
// --------------------------------------------------

const config = {

    environment,

    baseURL: process.env.BASE_URL,

    username: process.env.USERNAME,

    password: process.env.PASSWORD,

    browser: (
        process.env.BROWSER || 'chromium'
    ).trim().toLowerCase(),

    headless:
        process.env.HEADLESS === 'true',

    timeout:
        Number(process.env.TIMEOUT || 30000),

    screenshot:
        process.env.SCREENSHOT || 'onFailure',

    video:
        process.env.VIDEO || 'retain-on-failure',

    trace:
        process.env.TRACE || 'retain-on-failure'
};

// --------------------------------------------------
// 6. Display configuration
// --------------------------------------------------

console.log(`
========== TEST CONFIG ==========
Environment : ${config.environment}
Base URL    : ${config.baseURL}
Browser     : ${config.browser}
Headless    : ${config.headless}
Timeout     : ${config.timeout}
=================================
`);

module.exports = config;