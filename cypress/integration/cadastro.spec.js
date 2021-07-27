/// <reference types="cypress"/>
import cadastro from '../support/pages/cadastro/'
const faker = require('faker');

context('Cadastrar', () => {
    beforeEach(() => {
        cadastro.acessarRegister();
    });
    it('Cadastrar um novo usuário', () => {
        cadastro.preencherFormulario()
        cadastro.subimeterCadastro()
        cadastro.verificarSeCadastroFoiCriadaComSucesso()       
    });
});