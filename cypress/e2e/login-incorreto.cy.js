describe('Acessar Tela de login', () => {
    
    beforeEach(() => {
        cy.visit('https://jacksonteixeira.com/')
    })
    
    it('Preencher os dados incorretamente', () => {
        cy.login('plataforma@jacksnteixeira.com', 'plataformaJT')
        cy.get('#toast-container').should('be.visible')
    })
})