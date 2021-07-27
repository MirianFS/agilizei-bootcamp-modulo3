import Routes from '../../routes'
const faker = require('faker');

const el = require('./elements').ELEMENTS
class settings {
    acessarSettings(){
        cy.visit('settings');
    }
    preencherFormulario(){
        cy.get(el.inputImage).clear().type(Cypress.config().user.image);
        cy.get(el.inputUsername).clear().type(Cypress.config().user.userName);
        cy.get(el.textAreaBio).clear().type(faker.lorem.paragraph());
        cy.get(el.inputEmail).clear().type(Cypress.config().user.email);
        cy.get(el.inputPassword).clear().type(Cypress.config().user.password);
    }

    submeterFromulario(){
        cy.get(el.buttonSubmit).click();
    }

    verificarSeAlteracaoAsSettingsComSucesso(){
        // cy.wait(`@${Routes.as.getUser}`).then((getUserResponse) => {
        //     expect(getUserResponse.status).to.eq(200)
        // })

        
        // cy.wait(`@${Routes.as.putUser}`).then((putUserResponse) => {
        //     expect(putUserResponse.status).to.eq(200)
        // })
        
        // cy.wait(`@${Routes.as.getArticlesAuthor}`).then((getArticlesAuthorResponse) => {
        //     expect(getArticlesAuthorResponse.status).to.eq(200)
        // })

        //erro
        cy.wait(`@${Routes.as.getProfiles}`).then((getProfilesResponse) => {
            expect(getProfilesResponse.status).to.eq(200)
        })
    }

}

export default new settings();