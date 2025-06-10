import LoginPage from "../page_objects/LoginPage";

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1280, 720);
    });

    it.only('Login with valid credentials', () => {
        LoginPage.elements.loginForm().should('be.visible');
        LoginPage.enterUsername(Cypress.env('USER_NAME'));
        LoginPage.enterPassword(Cypress.env('USER_PASSWORD'));
        LoginPage.clickLoginButton();
        cy.url().should('include', '/inventory.html');
    });

    it('Login with invalid credentials', () => {

    });

    it('Login locked_out_user', () => {

    });

    it('Login locked problem_user', () => {

    });
});