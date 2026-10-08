Feature: OrangeHRM Login
 
 @smoke
  Scenario: Login with valid credentials

    Given I open the OrangeHRM application

    When I enter username "Admin"

    And I enter password "admin123"

    And I click the login button

    Then I should see the OrangeHRM dashboard
 