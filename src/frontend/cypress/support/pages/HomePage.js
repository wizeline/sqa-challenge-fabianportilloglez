class HomePage {

    static visitLoginPage() {
        cy.visit('/')
        cy.contains('Log in').click({ force: true })
    }
    
}
export default HomePage;
  