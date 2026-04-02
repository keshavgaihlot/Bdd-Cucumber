Feature: Add to cart

  Scenario: Add product to cart
    Given I open Demoblaze website
    When I login with username "standard_user" and password "secret_sauce"
    And I add a product to cart
    Then product should be added to cart
    