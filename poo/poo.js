// Aprendendo programação orientada a objetos com o Avatar

class Humano {
    nome;
    idade;
    altura;

    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura
    } //constructor é o método para criação de cada objeto

    falar() {
        return 'falou';
    }

    ouvir(){
        return 'ouviu';
    }
}

const sully = new Humano('Jake Sully', 22, 1.78);
const draGrace = new Humano('Grace Augustine', 50, 1.62);

// console.log(sully, draGrace) para sully e draGrace terem características, é necessário passar um constructor.

console.log(sully.altura)
console.log(draGrace.idade)
console.log(sully.falar())

class Navi {
    genero;
    nome;
    tamanho;

    constructor(genero, nome, tamanho){
        this.genero = genero;
        this.nome = nome;
        this.tamanho = tamanho;
    }

}
    const Avatar1 = new Navi('Macho', 'Avatudo', 2.38)
    console.log(Avatar1)

