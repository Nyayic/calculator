Feature: Calculation

   Scenario: Addition
        Given I start with 1
        When I add 0
        Then I end up with 1

    Scenario: Subtraction
        Given I start with 1
        When I subtract 1
        Then I end up with 0

    Scenario: Multiplication
        Given I start with 2
        When I multiply with 2
        Then I get 4

    Scenario: Division
        Given I start with 4
        When I divide it with 2
        Then I get 2