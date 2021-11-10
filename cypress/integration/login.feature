Feature: Login to Application
    As a valid user
    I want to login in into Application

    Scenario: Login
        Given I open login page in application
        When I submit login
        Then I should see the homepage
