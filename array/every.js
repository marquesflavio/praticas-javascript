//Testa se um predicado é verdadeiro para cada elemento do array

//Check if all values in ages[] are over 18:

const ages = [32,33,16,40];

ages.every(checkAge)

function checkAge(age){
    return age > 18
}

console.log(ages.every(checkAge))

//Como existe uma idade menor que 18, o teste retorna false.