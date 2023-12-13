class Carro { 
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.vel = 0
        this.ligado = false
        this.cor = undefined
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }

    setCor = function(cor) {
        this.cor = cor
    }
}


class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro("Sandero", 4)
c1.ligar()
c1.setCor("Prata")

const c2 = new Militar("GTK Boxer", 6, 100, 50)
c2.setCor("Verde")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()


console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Estado: ${(c1.ligado) ? "ligado" : "desligado"}`)
console.log(`Cor: ${c1.cor}`)
console.log("----------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Estado: ${(c2.ligado) ? "ligado" : "desligado"}`)