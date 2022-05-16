class LoginPage {

    /**
     * TODO: 
     * Better selection of elements
     * Define all the logic for login in one single method
     * Define constants with attribute elements on unique file
     */

static visitLoginPage() {
  cy.visit('/');
  cy.contains('Log in').click();
}

/* static fillUsername() {
  cy.get('.form-control')
    .clear()
    .type('fabian.portillo@wizeline.com')

}

static fillPassword() {
  cy.get('.form-control')
    .clear()
    .type('Shadowops_1')

}

static clickLoginButton() {
  cy.click('.button-login')
}

static visitMyNotesPage() {
  cy.contains('My Notes')
} */

}

export default LoginPage;

/* static loginSuccess() {
    cy.visit('/');  

    cy.contains('Log in').click();
    cy.get('#_560f80a0 f9408a0e')
        .clear()
        .type(Cypress.env('username'))
    cy.get('.form-control')
        .clear()
        .type(Cypress.env('password'))

    cy.click('.button-login')
    cy.contains('My Notes')
} */