/// <reference types="cypress"/>

import login from '../support/pages/login'

context('Login', () => {
    beforeEach(() => {
        login.acessarLogin();
    });
    it('Logar com sucesso', () => {
       login.preencherFormulario()
       login.submeterFromulario()
       login.verificarSeLogarComSucesso()
    });
});