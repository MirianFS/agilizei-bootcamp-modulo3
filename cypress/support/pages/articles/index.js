import Routes from '../../routes'
const faker = require('faker');

const el = require('./elements').ELEMENTS

class articles {
    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click();
    }
    preencherFormulario(){
        cy.get(el.inputTitle).type('Agilizei Titulo');
        cy.get(el.inputDescription).type('Agilizei Descricao');
        cy.get(el.textAreaContext).type(faker.lorem.paragraph());
        cy.get(el.inputTagField).type('cypress');
    }
    
    subimeterPublicacao(){
        cy.get(el.buttonSubmit).click();
        
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.status).to.eq(200)
        })
        
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.status).to.eq(200)
        })
    }
    
}
export default new articles();