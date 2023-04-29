const alunos = ['Flávio', 'Diego', 'Gabi']
const notas = [10,9,8]

const listaAlunosENotas = [alunos,notas]

//verificar se o aluno ditado está na lista. Para isso criei uma função como parâmetro aluno, o qual terá o nome ditado.
function mostraNomeENota(aluno){
    if(listaAlunosENotas[0].includes(aluno)){ //se o array[0] do array listaAlunosENotas incluir o aluno...
        console.log(`${aluno} está cadastrado(a)!`)
        //const alunos = listaAlunosENotas[0]
        //const medias = listaAlunosENotas[1]
        const [alunos,medias] = listaAlunosENotas //forma nova de atribuir const a partir de um mesmo local. (desestruturação de lista)

        const indice = alunos.indexOf(aluno) //retorna o índice do aluno no array[0] do array listaAlunosENotas 
        const media = medias[indice]
        console.log(`${aluno} está cadastrado(a) e a sua média é: ${media}`)

    } else{
        console.log(`${aluno} não está cadastrado!`)
    }
} mostraNomeENota('Gabi')