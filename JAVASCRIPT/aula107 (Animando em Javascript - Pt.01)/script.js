const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const inicial = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
}

let anima = null

const mover = (direcao) => {
    carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
}

btn_esquerda.addEventListener("click", (evento) => {
    clearInterval(anima)
    anima = setInterval(mover, 0, -1)
})

btn_direita.addEventListener("click", (evento) => {
    clearInterval(anima)
    anima = setInterval(mover, 0, 1)
})

btn_parar.addEventListener("click", (evento) => {
    clearInterval(anima)
})

window.onload = inicial