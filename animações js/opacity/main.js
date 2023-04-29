const iconLogo = document.querySelector('.icon-logo')

iconLogo.addEventListener('click', () =>{
    //efeito de opacidade
    //efeito de toggle (crescendo/diminuindo)
    //chamar o que será escondido ou mostrado
    let menu = document.getElementById('menu')
    if(menu.classList.contains('hide')){ //se o menu tiver a class hide na sua "lista de classes" ele:
        menu.classList.add('show')//adiciona o show, ao click ou
        menu.classList.remove('hide')
    } else{
        menu.classList.add('hide')// do contrário, ele adiciona a class hide.
        menu.classList.remove('show')
    }
})