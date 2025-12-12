class endereco {
    preencherEndereco({nome,sobrenome,pais,rua,cidade,estado,cep}){
        cy.contains("Endereços").click()
        cy.get('a[href*="edit-address/entrega"]').click()
        cy.get("#shipping_first_name").type(nome)
        cy.get("#shipping_last_name").type(sobrenome)
        cy.get('#select2-shipping_country-container').click()
        cy.get('.select2-search__field').type(pais)
        cy.contains('.select2-results__option', pais).click()
        cy.get("#shipping_address_1").type(rua)
        cy.get("#shipping_city").type(cidade)
        cy.get("#select2-shipping_state-container").click()
        cy.get(".select2-search__field").type(estado)
        cy.contains('.select2-results__option', estado).click()
        cy.get("#shipping_postcode").type(cep)
        cy.get('button[name="save_address"]').click()
        cy.contains("Endereço alterado com sucesso.").should("be.visible")





    }



} 
module.exports = new endereco()
