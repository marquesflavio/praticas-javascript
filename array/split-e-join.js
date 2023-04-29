//Testando se a palavra é um palíndromo ou não

eUmPalindromo()

function eUmPalindromo () {
    let palavra = 'rever'
    let separandoAsLetras = palavra.split(""); //separa as letras da string e transf em array
    let palavraInvertida = separandoAsLetras.reverse();//coloca ao contrário
    
    palavraInvertida = palavraInvertida.join('') //transforma o array em string

    palavra == palavraInvertida ? console.log(`${palavra} é um palíndromo`) : console.log(`${palavra} não é um palíndromo`)
    
    // if (palavra == palavraInvertida){
    //     console.log(`${palavra} é um palíndromo`) 
    // } else {
    //     console.log(`${palavra} não é um palíndromo`)
    // }
        
}