const controls = document.querySelectorAll('.control')
let roboAtual = 0
const robos = document.querySelectorAll('.robo')

const maxRobos = robos.length

controls.forEach( control => {
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains('seta-esquerda')
        
        if (isLeft){
            roboAtual -= 1;
        } else {
            roboAtual +=1;
        }

        if (roboAtual >= maxRobos){
            roboAtual = 0
        }
        if (roboAtual < 0){
            roboAtual = maxRobos -1
        }

        robos.forEach(robo => robo.classList.remove('robo-atual'))

        robos[roboAtual].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        robos[roboAtual].classList.add("robo-atual")

    })

})