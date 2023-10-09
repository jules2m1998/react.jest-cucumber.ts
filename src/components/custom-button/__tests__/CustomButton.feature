Feature: Custom button

    For test
    Scenario: button is clicked and make action
        Given I create my button with counter to 1 and a onClick function
        When I click to my button
        Then My function is called