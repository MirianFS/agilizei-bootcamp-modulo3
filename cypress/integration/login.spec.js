/// <reference types="cypress"/>

import login from '../support/pages/login'

context('Cadastrar', () => {
    it('Cadastrar um novo usuário', () => {
       login.acessarLogin()
       login.preencherFormulario()
        login.submeterFromulario()
    });
});