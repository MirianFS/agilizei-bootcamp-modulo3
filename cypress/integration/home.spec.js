/// <reference types="cypress"/>

import home from '../support/pages/home'

context('Home', () => {
    beforeEach(() => {
        cy.backgroundLogin();
    });

    it('Verificar elementos da tela home', () => {
       home.verificarElementos()
    });

})