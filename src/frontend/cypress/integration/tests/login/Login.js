import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/LoginPage';

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

Then('user is redirected to MyNotes page', () => {
    LoginPage.visitApp();
})

  
