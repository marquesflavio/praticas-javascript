class Navi {
    nome;
    altura;
    
    //constructor define atributos
    constructor(nome, altura){
        this.nome = nome;
        this.altura = altura;
    }
    //métodos (funções)
    correr(){
        return 'correu'
        
    }
    conectar(){
        return 'usou o rabo como porta usb'
    }
}
    
    //Em Pandora existem os Omaticaya e os Metkayina que descendem de Na'vi

class Omaticaya extends Navi{
    //além dos atributos do Navi (nome e altura) temos:
    corDaPele = 'azul claro';
    rabo = 'mais fino e comprido';
    velocidadeNaCorrida;
    
    escalar(){
        return this.nome + 'escala montanhas'
    }
    constructor(nome, altura, velocidadeNaCorrida){
        super(nome, altura)
        this.velocidadeNaCorrida = velocidadeNaCorrida
    }
    
}
    
    const kiri = new Omaticaya('Kiri Sully', 2.32)
    console.log(kiri)


