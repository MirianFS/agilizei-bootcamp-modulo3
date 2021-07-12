/// <reference types="cypress"/>

// const faker = require('faker');

import articles from '../support/pages/articles/'

context('Publicação', () => {
    beforeEach(() => {
        cy.backgroundLogin()
        // cy.get('a[href*=editor]').click();
        articles.acessarFormularioDeNovaPublicacao();
    });
      
    it('Criar uma nova publicação', () => {
        articles.preencherFormulario();
        articles.subimeterPublicacao();
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();        
    //    cy.get('input[ng-model*=title]').type('Agilizei Titulo');
    //    cy.get('input[ng-model*=description]').type('Agilizei Descricao');
    //    cy.get('textarea[ng-model*=body]').type(faker.lorem.paragraph());
    //    cy.get('input[ng-model*=tagField]').type('cypress');
    //    cy.get('button.btn-primary').click();
    });
});