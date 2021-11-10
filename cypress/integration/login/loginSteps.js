import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "./LoginPage"
Given('I open login page in application',()=>{
    
   LoginPage.visitPage()
})
When("I submit login",()=>{
  LoginPage.LogIn()
})
Then("I should see the homepage",()=>{
   LoginPage.validateProject()
})