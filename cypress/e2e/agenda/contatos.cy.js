/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    // Inclusão de contatos
    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('Robert Santos')
        cy.get('input[type="email"]').type('robert@exemplo.com')
        cy.get('input[type="tel"]').type('71992550744')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').contains('Robert Santos')
    })

    // Alteração de contatos
    it('Deve alterar o último contato', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="email"]').type('{selectall}{backspace}robertsantos@exemplo.com')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk').contains('robertsantos@exemplo.com')
    })

    // Remoção de contatos
    it('Deve remover o último contato', () => {
        cy.intercept('DELETE', '/api/contatos').as('deletarContato')
        cy.get('.delete').last().click()
        cy.wait('@deletarContato').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
            cy.get('.sc-eDDNvR > :nth-child(1)').last().should('not.have.text', 'Robert Santos')
            
        })
    })
})