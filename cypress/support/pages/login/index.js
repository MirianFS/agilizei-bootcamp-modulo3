import Routes from '../../routes'
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

    verificarSeLogarComSucesso(){
        cy.wait(`@${Routes.as.postLogin}`).then((postLoginResponse) => {
            expect(postLoginResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        })
        
        cy.wait(`@${Routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.status).to.eq(200)
        })
    }

}

export default new login();