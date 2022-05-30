class LoginPage {
    
    static visitLoginPage() {
        cy.visit('/')
        cy.contains('Log in').click()
    }

    /**
     * Common Login:this login will be called in other Pages
     */
  static login() { 
    cy.visit('/') // https://docs.cypress.io/api/commands/within#Temporarily-escape
    cy.contains('Log in').click()
    cy.contains('label', 'Email').type('fabian.portillo@wizeline.com');
    cy.contains('label', 'Password').type('Shadowops_1', {log:false});
    cy.contains('button', 'Log in').click();
  } 

  static fillUsername(username) {
      cy.contains('label', 'Email').type(username);
  }

  static fillPassword(password) {
      cy.contains('label', 'Password').type(password, {log:false});
  }

  static clickOnLoginButton() {
      cy.contains('button', 'Log in').click().as('buttons')
/*         .then($buttons => {
        $buttons.css('border', '1px solid magenta')
        })
        cy.screenshot('login') */
  }

  static visitApp() {
      cy.url().should('include', 'app/today');
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/app/today');
      })
      cy.contains("Today").should("be.visible");
  }

  static wrongEmailOrPasswordMessage() {
      cy.contains('Wrong email or password.')
      /**
       * todo: assert status code 401
       */
  }

  static emptyEmailMessage() {
      cy.contains('Please enter a valid email address.');
  }

  static emptyPasswordMessage() {
      cy.contains('Passwords must be at least 8 characters long.');
  }

  static exceedNumberOfTriesMessage(password) {
    for (let i = 0; i < password.length; i++) {
        cy.contains('label', 'Password')
            .type(password[i]+"{enter}",{log:false})
    }
      cy.contains('Too many login attempts. Try again later.');
  }

}

export default LoginPage;