describe('Acessar Tela de login', () => {
    
    beforeEach(() => {
        cy.visit('https://jacksonteixeira.com/')
    })
    
    it('Preencher os dados corretamente', () => {
        cy.login('plataforma@jacksonteixeira.com', 'plataformaJT')
    })
})