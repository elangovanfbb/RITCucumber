Feature: Login with multiple users

@multiple
Scenario Outline: Login with multiple wrong credentials
Given Launch a site and navigate to login page
When Enter username "<username>"
When Enter password "<password>"
And Click on Login button
Then Login error should display

Examples:
|username|password|
|elango|admin123|
|Admin|elango123|
