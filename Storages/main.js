// 1 - inserir dado no navegador, é possível verificar no devtools no aplication / local storage.
//Os dados não se perdem mesmo fechando e abrindo o navegador
localStorage.setItem("name", "Flávio");

// 2 - resgatar dados
const name = localStorage.getItem("name");
console.log(name);

// 3 - resgata valores que não existem também, trazendo null como retorno

const lastname = localStorage.getItem("lastname");
console.log(lastname);

// 4 - remover item do local storage

localStorage.removeItem("name");

localStorage.setItem("a", 1);
localStorage.setItem("b",2);

console.log(typeof localStorage.get("a"));
//independente do valor que for pra localstorage, sempre fica uma string.

// 5 - limpa todos os dados.
localStorage.clear(); 

/*---------------------------------------------------------------------------*/

sessionStorage.setItem("number",123)
// ao fechar e abrir a página, os dados se perdem.

sessionStorage.getItem // resgate os itens
