/// <reference types="cypress"/>

import settings from '../support/pages/settings'

context('Settings', () => {
    beforeEach(() => {
        cy.backgroundLogin();
        settings.acessarSettings();
    });
    it('Update do Settings com sucesso', () => {
       settings.preencherFormulario()
       settings.submeterFromulario()
       settings.verificarSeAlteracaoAsSettingsComSucesso()
    });
});