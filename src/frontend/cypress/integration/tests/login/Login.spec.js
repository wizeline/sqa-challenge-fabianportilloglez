import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../../support/pages/LoginPage';

Given('user is in login page', () => {
    LoginPage.visitLoginPage();
})

When('user fill username', () => {
    LoginPage.fillValidUsername();
})

When('user fill username {string}', (username) => {
    LoginPage.fillUsername(username);
})

And('user fill password', () => {
    LoginPage.fillValidPassword();
})

And('user fill password {string}', (password) => {
    LoginPage.fillPassword(password);
})

And('clicks on log in button', () => {
    LoginPage.clickOnLoginButton();
})

And('clicks on log in button multiple times', (num) => {
    LoginPage.exceedNumberOfTriesLogin(num)
})

Then('user see the message {string}', (message) => {
    LoginPage.showMessage(message)
})

Then('user is in App page', () => {
    LoginPage.visitApp();
    cy.url().should('include', 'app/today');
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/app/today');
    })
    cy.contains("Today").should("be.visible");
})