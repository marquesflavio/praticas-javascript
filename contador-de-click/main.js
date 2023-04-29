let res = document.querySelector('.res')
let contador = 0

function Clicado(){
    contador ++
    
    res.innerHTML = `Clicou <mark>${contador}</mark> vezes`
    
}

function Reset(){
    contador = 0
    res.innerHTML = null
}
