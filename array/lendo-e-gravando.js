var a = ['world'];
var value = a[0];

console.log(value) //leu o primeiro índice do array a.

a[1] = 3.14; //atribuiu 3.14 ao índice 1 do array a
i = 2; //definiu 2 como o i (índice), ou seja, índice 2.
a[i] = 3;//atribuiu valor 3 ao índice 2
a[i + 1] = 'hello';//4º índice agora é uma string 'hello'
a[a[i]] = a[0];//lê os elementos 0 e 2, grava o elemento 3

console.log(a)