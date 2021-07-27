import Routes from '../../routes'
const faker = require('faker');

const el = require('./elements').ELEMENTS

class home {

    verificarElementos(){
        cy.get(el.linkConduit).should('have.text', 'conduit')
        cy.get(el.linkMenuHome).should('contain.text', 'Home');
        cy.get(el.linkMenuNewArticles).should('contain.text', 'New Article');
        cy.get(el.linkMenuSettings).should('contain.text', 'Settings');
        cy.get(el.linkMenuPerfil).should('contain.text', 'Mirian RWC');
        cy.get(el.linkMenuYourFeed).should('contain.text', 'Your Feed');
        cy.get(el.linkMenuGlobalFeed).should('contain.text','Global Feed');
        cy.get(el.divArticlePreview).should('contain.text', 'No articles are here... yet.');
        cy.get(el.divPopularTags).should('contain.text', 'Popular Tags')
    }
}
export default new home();