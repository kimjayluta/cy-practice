class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButto: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
        loginForm: () => cy.get('#login_button_container')
    }

    enterUsername(username) {
        this.elements.usernameInput().clear().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear().type(password);
    }

    clickLoginButton() {
        this.elements.loginButto().click();
    }
    
    verifyErrrorMessage(expectedMessage) {
       this.elements.errorMessage().should('be.visible').and('contain.text', expectedMessage);
    }
}

module.exports = new LoginPage();