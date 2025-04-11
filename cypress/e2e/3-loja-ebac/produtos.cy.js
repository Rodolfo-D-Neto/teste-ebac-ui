///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";
describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit ('produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
       
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Arcadio Gym Short')
        cy.get('.product_title').should('contain', 'Arcadio Gym Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7 
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('M','Green',qtd)
        cy.get('.woocommerce-message').should('contain', qtd, ' x Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando a massa de dados - prod -01', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    });        
     });

     it('Deve adicionar produto ao carrinho buscando a massa de dados - prod -02', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        });
     });

     it('Deve adicionar produto ao carrinho buscando a massa de dados - prod -03', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        });
     });       

     it.only('Deve adicionar produto ao carrinho buscando a massa de dados - prod -04', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[3].tamanho,
                dados[3].cor,
                dados[3].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)
        })
    })

});    