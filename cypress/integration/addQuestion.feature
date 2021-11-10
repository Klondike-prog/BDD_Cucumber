Feature:Adding a new question functionality for the internship-portal application.

    Scenario: Add new question
        Given the user has already created a new stage.
        When the user interacts with New Question button for the specified stage.
        And the user inputs the correct data for every section .
        And the user interacts with Update Question button to save his progress.
        Then the user should successfully add a new question to the specified stage.
