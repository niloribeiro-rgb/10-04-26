function alterarcor() {
    const body = document.querySelector(`body`)
    const botao = document.querySelector(`#button`)

    let textbutton = document.querySelector(`#onOff`)
    // if(body.style.background == 'green'){
    //     botao.addEventListener('click', ()=>{
    //     body.style.backgroundColor = 'white'
    // })
    // }  
    // else{
    //      botao.addEventListener('click', ()=>{
    //     body.style.backgroundColor = 'green'
    // })
    // }

    botao.addEventListener('click', () => {
        if (body.style.backgroundColor == 'black') {
            body.style.backgroundColor = 'white'
            textbutton.innerText= "On"
        }
        else {
            body.style.backgroundColor = 'black'
            textbutton.innerText= "Off"
        }
    })
}
alterarcor()


let imagens = ["img/imagem2.png", "img/image.png", "img/imagem3.png"]
// let imagens = ["../img/imagem2.png", "../img/image.png", "../img/imagem3.png"] vai introduzir no html entao sem ../

const botaoAvancar = document.querySelector(`#ir`)
const botaoRetornar = document.querySelector(`#voltar`)
const imgem = document.querySelector(`#imagem`)

let avancarIncremento = 0
function updateImagem() {
    imagem.src = imagens[avancarIncremento]
}

function imgSelect() {

    // leght nao


    botaoAvancar.addEventListener('click', () => {
        avancarIncremento = avancarIncremento + 1
        if (avancarIncremento >= imagens.length) {
            avancarIncremento = 0
        }
        console.log(avancarIncremento)
        updateImagem()
    })
    botaoRetornar.addEventListener('click', () => {
        avancarIncremento = avancarIncremento - 1
        if (avancarIncremento < 0) {
            avancarIncremento = imagens.length -1
            // imagens.length (-1)
        }
        console.log(avancarIncremento)
        updateImagem()
    })
    updateImagem()
}

imgSelect()
