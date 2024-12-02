///<reference types="cypres"/>

describe('funcionalidade: produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains ('Arcadio Gym Short')
        .click ()

        cy.get('.product_title').should('contain' , 'Arcadio Gym Short')
    });
});