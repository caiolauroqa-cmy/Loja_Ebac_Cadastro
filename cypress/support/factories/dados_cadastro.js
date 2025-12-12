const {faker} = require("@faker-js/faker");

function DadosCadastro() {
    return{
        email:faker.internet.email(),
        senha:faker.internet.password()


    };


}

module.exports = {DadosCadastro}