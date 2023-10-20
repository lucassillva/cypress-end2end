/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('https://www.jacksonteixeira.com/plataforma')
    })

    it('Preencher os dados incorretamente', () => {
        cy.login('plataforma@jacksonteixeira.com', 'plataformaJT')
        cy.contains('a', 'Produtos ').click()
        cy.contains('button', ' Cadastrar ').click()
        cy.get('#inputImagemProduto').selectFile('cypress/fixtures/images.jpg')
        cy.get('#inputNomeProduto').type('Carro')
        cy.get('#inputQuantidade').type('1')
        cy.get('#inputPrecoCompra').type('10000')
        cy.get('#inputPrecoVenda').type('6000')
        cy.get('#inputTipoProduto').type('Veiculo')
        // Localize o iframe do CKEditor
        cy.get('iframe').then($iframe => {
            const iframe = $iframe.contents();

            // Obtenha o elemento de texto dentro do CKEditor
            const ckEditorTextElement = iframe.find('body');

            // Dispare eventos de teclado para interagir com o CKEditor
            cy.wrap(ckEditorTextElement)
                .type('{selectall}{backspace}') // Limpe o conteúdo existente
                .type('Texto que você deseja inserir');

            
        });

        cy.get('#buttonSalvar').click()
        cy.get('.ng-trigger').should('be.visible')
    })
})