describe('Acessar Tela de login', () => {
    
    it('Preencher os dados corretamente', () => {
        cy.login('plataforma@jacksonteixeira.com', 'plataformaJT')
        cy.url().should('eq', 'https://www.jacksonteixeira.com/plataforma/painel')
    })
})