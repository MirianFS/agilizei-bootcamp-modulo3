const faker = require('faker');

const el = require('./elements').ELEMENTS
class login {
    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFromulario(){
        cy.get(el.buttonSubmit).click();
    }

}

export default new login();