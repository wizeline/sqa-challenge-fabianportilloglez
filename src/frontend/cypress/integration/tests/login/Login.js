import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import '../../pages/LoginPage'

Given('user is on login page', () => {
    cy.visitLoginPage();
})