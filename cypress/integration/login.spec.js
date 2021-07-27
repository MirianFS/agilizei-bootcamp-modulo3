/// <reference types="cypress"/>

import login from '../support/pages/login'

context('Cadastrar', () => {
    beforeEach(() => {
        login.acessarLogin();
    });
    it('Cadastrar um novo usuário', () => {
       login.preencherFormulario()
       login.submeterFromulario()
       login.verificarSeLogarComSucesso()
    });
});