///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('funcionalidade: login', ()=> {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('deve fazer login com sucesso' ,()=>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, ')

    });

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('rodolfoteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('rodolfo.teste@teste.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail rodolfo.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando a massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, RodolfoQA (não é RodolfoQA? Sair)')

    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados=>{
                cy.get('#username').type(dados.usuario, {log:false})
                cy.get('#password').type(dados.senha,{log:false})
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta')
        })

    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {

        cy.login('rodolfodutra@teste.com.br' , 'Teste@12345')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta')
        
    })

});