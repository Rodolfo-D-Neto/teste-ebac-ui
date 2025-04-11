/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

 // cypress/e2e/exercicio-e2e.cy.js
describe('Fluxo E2E - Loja EBAC', () => {
    beforeEach(() => {
      // Acessar a página inicial antes de cada teste
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });
  
    it('Deve realizar um pedido de ponta a ponta', () => {
      // Navegar até a página de produtos
      cy.get('nav').contains('Produtos').click();
  
      // Selecionar um produto
      cy.get('.product-list').find('.product').first().click();
  
      // Adicionar o produto ao carrinho
      cy.get('.add-to-cart-button').click();
  
      // Validar que o produto foi adicionado ao carrinho
      cy.get('.cart-items').should('contain', '1 item');
  
      // Realizar o checkout
      cy.get('.cart-icon').click();
      cy.get('.checkout-button').click();
  
      // Preencher os dados de checkout (usando Faker para dados aleatórios)
      const { faker } = require('@faker-js/faker');
      cy.get('#first-name').type(faker.name.firstName());
      cy.get('#last-name').type(faker.name.lastName());
      cy.get('#email').type(faker.internet.email());
      cy.get('#address').type(faker.address.streetAddress());
      cy.get('#city').type(faker.address.city());
      cy.get('#state').select('São Paulo');
      cy.get('#zip-code').type(faker.address.zipCode('#####-###'));
      cy.get('#credit-card').type('4111111111111111'); // Número de cartão fictício
      cy.get('#expiration-date').type('12/25');
      cy.get('#cvv').type('123');
  
      // Confirmar o pedido
      cy.get('.confirm-order-button').click();
  
      // Validar a conclusão do pedido
      cy.get('.order-confirmation')
        .should('be.visible')
        .and('contain', 'Pedido finalizado com sucesso');
    });
  });

})