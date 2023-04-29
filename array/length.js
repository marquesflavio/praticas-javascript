const arrayVazia = [,,,];

console.log(arrayVazia)
console.log(arrayVazia.length)

arrayVazia.push(30)
console.log(arrayVazia.length)

//O JavaScript manteve as posições vazias e adicionou o 30 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 30). Chamamos este tipo de estrutura de array esparso