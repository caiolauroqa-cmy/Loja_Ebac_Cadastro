/// <reference types = "cypress"/>
import {DadosCadastro} from "../support/factories/dados_cadastro"
import dados_endereco from "../fixtures/dados_endereco.json"

const cadastro = require("../support/page-objects/cadastro_page")
const endereco = require("../support/page-objects/endereco_page")


describe("Fluxo completo de cadastro de usuário e cadastro de endereço",() => {

    it('Deve cadastrar um novo usuario e preencher o endereço corretamente', () => {
        const usuario = DadosCadastro()

        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cadastro.preenchercadastro(usuario)
        endereco.preencherEndereco(dados_endereco)

    
        
    });

})
