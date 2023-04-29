//eliminar itens repetidos
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const meuSet = new Set(nomes)
//cria um setlist de itens, porém não aceita itens repetidos.
const nomesAtualizados = [...meuSet]
//feito um spread operator no Set()
console.log(nomesAtualizados)
