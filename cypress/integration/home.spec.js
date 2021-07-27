/// <reference types="cypress"/>

import home from '../support/pages/home'

context('Cadastrar', () => {
    beforeEach(() => {
        cy.backgroundLogin();
    });

    it('Verificar elementos da tela home', () => {
       home.verificarElementos()
    });

})