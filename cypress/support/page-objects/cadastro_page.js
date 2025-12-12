class Cadastro {
    preenchercadastro({ email, senha }) {
        cy.get("#reg_email").type(email)
        cy.get("#reg_password").type(senha)
        cy.get('input[name="register"]').click() // botão de registrar
    }
}

module.exports = new Cadastro()
