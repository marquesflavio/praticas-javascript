const alunos = [ "João", "Maria", "Pedro", "Antônio", "Flávio", "Tatiane", "Flávia", "Diego", "Gabrielli", "Vinícius"]

const sala1 = alunos.slice(0,5) 
const sala2 = alunos.slice(5)
console.log(sala1)
console.log(sala2)
//peculiaridade do slice(), o segundo parâmetro não é incluído no 'corte', por isso tomar cuidado ao definir.
//quando quero fatiar de um índice até o final, basta colocar o índice inicial no parâmetro.