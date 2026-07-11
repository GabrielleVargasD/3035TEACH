let botao = document.querySelector("button")

function mudarCorFundo(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let cor = "rgb(" + r + "," + g  + ","+ b + ")"

    document.querySelector(".card").style.backgroundColor=cor
}

botao.addEventListener(
    "click", mudarCorFundo
)


