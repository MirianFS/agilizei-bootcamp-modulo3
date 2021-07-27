import Routes from '../../routes'
const faker = require('faker');
const el = require('./elements').ELEMENTS

class cadastro{

    acessarRegister(){
        cy.visit('register');
    }
    
    preencherFormulario(){
        cy.get(el.inputUsername).type(faker.name.firstName() + " " +faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }
    
    submeterCadastro(){
        cy.get(el.buttonSubmit).click();
        
    }

    verificarSeCadastroFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        })
        
        cy.wait(`@${Routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.status).to.eq(200)
        })  
    }

}
export default new cadastro();