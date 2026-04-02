Feature: Signup functionality

  Scenario: Successful signup
    Given I open Demoblaze website
    When I click on Sign up button
    And I register with username "user12345" and password "pass123"
    Then I should see signup success message