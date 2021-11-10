Feature: Add New Stage to application

    Adding a new stage functionality for the internship-portal application.

    Scenario: Add New Stage

        Given I am on the internship-portal project
        When I interact with New Stage button
        And I input the correct data for every section of the stage
        And I interact with Save button
        Then I should successfully add a new stage to the project

