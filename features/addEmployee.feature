Feature: Adding a new entry

@regression
Scenario: Add a new employee
Given Launch a site and login to the application
When Navigate to PIM page
And Navigate to Add Employee page
And Fill the employee details and save the entry
Then Verify that success message is displayed