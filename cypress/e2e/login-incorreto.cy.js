describe('Acessar Tela de login', () => {
    
    it('Preencher os dados incorretamente', () => {
        cy.login('plataforma@jacksnteixeira.com', 'plataformaJT')
        cy.get('#toast-container').should('be.visible')
        cy.url().should('eq', 'https://www.jacksonteixeira.com/plataforma/login')
    })
})