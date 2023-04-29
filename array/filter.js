//mostrar quais alunos foram reprovados, utilizando o filter()

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7,4.5,8,7.5]

const reprovados = alunos.filter((aluno,media) => {
    return medias[media] < 7;
})
console.log(reprovados)

//a lógica é: o método filter() utiliza sempre os booleans para fazer a comparação. No caso do exemplo, eu passei que o array medias, em cada índice (aqui chamado de media) se for < que 7 então a condição é TRUE, então retorna o único aluno com índice menor que 7, logo o reprovado.

const estudantes = ['A', 'B', 'C']
const notas = [1,2.5,3]

const reprov = estudantes.filter((estudante, nota) =>{
    return notas[nota] < 1;
})
// console.log(reprov)