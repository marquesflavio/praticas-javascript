const numeros = [43, 50, 65, 12]
const soma = numeros.reduce((acc, num)=>{
    return acc + num
},0)
console.log(soma)

// array de numeros, const de soma dos números com o reduce, onde o acc começa com 0 e returna acc + cada número.