/// <reference types="cypress"/>

import articles from '../support/pages/articles/'

context('Publicação', () => {
    beforeEach(() => {
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao();
    });
      
    it('Criar uma nova publicação', () => {
        articles.preencherFormulario();
        articles.subimeterPublicacao();
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();   
    });

    it('Comentando na publicação apos criar ela', () => {
        articles.preencherFormulario();
        articles.subimeterPublicacao();
    });
});