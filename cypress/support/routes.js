class Routes {
    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUsers: 'POSTUsers',
        getTags: 'GETTags',
        getFeed: 'GETFeed',
        postLogin: 'POSTLogin',
        getUser: 'GETUser',
        putUser: 'PUTUser',
        getProfiles: 'GETProfiles',
        getArticlesAuthor: 'GETArticlesAuthor'

    }
    
    init(){
        cy.server();

        //Articles
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/**/comments').as(this.as.getArticlesTitleComments);

        //Cadastro
        cy.route('POST', '**/api/users').as(this.as.postUsers);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.getFeed);  

        //Login
        cy.route('POST', '**/api/users/login').as(this.as.postLogin)

        //Settings
        cy.route('PUT', '**/api/user').as(this.as.putUser);
        cy.route('GET', '**/api/user').as(this.as.getUser);
        cy.route('GET', '**/api/profiles/Agilizei RWC').as(this.as.getProfiles);
        cy.route('GET', '**/api/articles?author=Agilizei+RWC&limit=5&offset=0').as(this.as.getArticlesAuthor);
    }
}

export default new Routes();
