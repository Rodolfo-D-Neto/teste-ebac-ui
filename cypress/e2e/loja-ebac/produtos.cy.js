///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: produtos', () => {


    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
   
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('kratos-gym-pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Kratos Gym Pant')
        produtosPage.addProdutoCarrinho('33', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain',  qtd , ' × "Kratos Gym Pant" foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
           
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
    
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
         })
   
    });


})
