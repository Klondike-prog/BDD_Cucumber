import {
    Given,
    When,
    Then
} from 'cypress-cucumber-preprocessor/steps'

import AddStage from "../addStage/AddStage"
import LoginPage from "../login/LoginPage"
import AddQuestion from "../addQuestion/AddQuestion"

Given("the user has already created a new stage.",()=>{
    LoginPage.LogIn()
    LoginPage.visitPage()
    LoginPage.validateProject()
    LoginPage.loadProject()
    AddStage.createStage()
    AddStage.fillDataStage()
    AddStage.saveStage()
    AddStage.validateStage()
})

When("the user interacts with New Question button for the specified stage.", () => {
   AddQuestion.createQuestion()
})
 And("the user inputs the correct data for every section .", () => {
    AddQuestion.fillDataQuestion()
 })
  And("the user interacts with Update Question button to save his progress.", () => {
    AddQuestion.saveQuestion()
 })
 Then("the user should successfully add a new question to the specified stage.", () => {
    AddQuestion.validateQuestion()
})