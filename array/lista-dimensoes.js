const alunos = ['Flávio', 'Diego', 'Gabi']
const notas = [10,9,8]

const listaAlunosENotas = [alunos,notas] //dessa forma o array listaAlunosENotas possui dois elementos que também são arrays. E para acessar os elementos internos é só fazer o que segue:

console.log(listaAlunosENotas)

console.log(`O primeiro aluno da lista de alunos é o: ${listaAlunosENotas[0][0]}`)
console.log(`E a nota do ${listaAlunosENotas[0][0]} é a nota: ${listaAlunosENotas[1][0]}`)