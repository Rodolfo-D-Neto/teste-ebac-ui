///<reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta com sucesso', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
        cy.login(login.usuario , login.senha)
          })
       
        
    });

    it.only('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesContas('Rodolfo', 'Dutra', 'Rodolfo.QA')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});