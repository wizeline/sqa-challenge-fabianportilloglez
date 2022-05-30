import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/LoginPage';

//Login
Given('user is in login page', () => {
    LoginPage.visitLoginPage();
})

When('user fill username {string}', (username) => {
    LoginPage.fillUsername(username);
})

And('user fill password {string}', (password) => {
    LoginPage.fillPassword(password);
})

And('clicks on log in button', () => {
    LoginPage.clickOnLoginButton();
})

Then('error message for wrong email or password is displayed {string}', (message) => {
    LoginPage.wrongEmailOrPasswordMessage(message);
})

Then('error message for empty email is displayed {string}', (message) => {
    LoginPage.emptyEmailMessage(message);
})

Then('error message for empty password is displayed {string}', (message) => {
    LoginPage.emptyPasswordMessage(message);
})

Then('error message for exceed number of tries is displayed {string}', (message) => {
    LoginPage.exceedNumberOfTriesMessage(message);
})

Then('user is in App page', () => {
    LoginPage.visitApp();
})