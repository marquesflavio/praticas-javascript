//supondo que temos um cadastro de clientes de uma loja

const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '11122233345',
    email: "andre@dominio.com"
};
console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos de idade`)

//para acessar os itens desse object, podemos utilizar o nome da variável e colocar o ponto

console.log(`Os três primeiros dígitos do CPF do cliente são ${cliente.cpf.substring(0,3)}`)
//substring é uma forma de retirar um pedaço da string.