import login from '../../fixtures/loginSelectors.json';

class LoginPage {
    
    static visitLoginPage() {
        cy.visit('/')
        cy.contains('Log in').click({ force: true })
    }

    // function used outside login page
    static login() { 
        cy.get(login.usernameInputText).type(Cypress.env('CY_USERNAME'));
        cy.get(login.passwordInputText).type(Cypress.env('CY_PASSWORD'), { log:false });
        cy.get(login.loginButton).click()
    }  

    // functions used only in login page
    static fillValidUsername() {
        cy.get(login.usernameInputText).type(Cypress.env('CY_USERNAME'));
    }

    static fillValidPassword() {
        cy.get(login.passwordInputText).type(Cypress.env('CY_PASSWORD'), { log:false });
    }
    
    static fillUsername(username) {
        cy.get(login.usernameInputText).type(username);
    }

    static fillPassword(password) {
        cy.get(login.passwordInputText).type(password, { log:false });
    }

    static clickOnLoginButton() {
        cy.get(login.loginButton).click()
    }

    static exceedNumberOfTriesLogin(num) {
        num = 7;
        for (let i = 0; i < num; i++) {
          cy.contains('button', 'Log in').click({ force: true })
      }
    } 

    static visitApp() {

    }

    static showMessage() {

    }
}

export default LoginPage;
