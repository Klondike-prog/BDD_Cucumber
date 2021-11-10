import {
    Given,
    When,
    Then
} from 'cypress-cucumber-preprocessor/steps'

import AddStage from "./AddStage"
import LoginPage from "../login/LoginPage"

Given("I am on the internship-portal project",()=>{
    LoginPage.LogIn()
    LoginPage.visitPage()
    LoginPage.validateProject()
    LoginPage.loadProject()
})

When("I interact with New Stage button", () => {
    AddStage.createStage()

})
 And("I input the correct data for every section of the stage", () => {
     AddStage.fillDataStage()
 })
  And("I interact with Save button", () => {
      AddStage.saveStage()
 })
 Then("I should successfully add a new stage to the project", () => {
    AddStage.validateStage()
})