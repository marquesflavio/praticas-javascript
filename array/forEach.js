//Chama uma função para cada elemento do array

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function(nota){
    somaDasNotas += nota //esse parâmetro nota dentro da function é lógica interna do forEach(), não passamos, porém ele entende que são os elementos do array. É possível passar também outra variável de indice no parametro da funcão, caso necessário.
}) 
const media = somaDasNotas / notas.length
console.log(`a media das notas é: ${media}`)
