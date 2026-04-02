Feature: Login functionality

  Scenario: Valid login
    Given I open Demoblaze website
    When I click on Login button
    And I login with username "standard_user" and password "secret_sauce"
    Then I should see logout button