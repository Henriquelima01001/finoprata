
// criar a variável modalKey sera global
let modalKey = 0

// variavel para controlar a quantidade inicial de pratas na modal
let quantpratas = 1

let cart = [] // carrinho

// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)


const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}





const preencheDadosDaspratas = (prataItem, item, index) => {

	prataItem.setAttribute('data-key', index)
    prataItem.querySelector('.prata-item--img img').src = item.img
    prataItem.querySelector('.prata-item--price').innerHTML = formatoReal(item.price[2])
   
    
}

const preencheDadosModal = (item) => {
    seleciona('.prataBig img').src = item.img
    seleciona('.prataInfo h1').innerHTML = item.name
    seleciona('.prataInfo--desc').innerHTML = item.description
    seleciona('.prataInfo--actualPrice').innerHTML = formatoReal(item.price[2])
}


const preencherTamanhos = (key) => {
    // tirar a selecao de tamanho atual e selecionar o tamanho grande
    seleciona('.prataInfo--size.selected').classList.remove('selected')


   
}





// /aula 06

// MAPEAR prataJson para gerar lista de pratas
prataJson.map((item, index ) => {
    //console.log(item)
    let prataItem = document.querySelector('.models .prata-item').cloneNode(true)
    //console.log(prataItem)
    //document.querySelector('.prata-area').append(prataItem)
    seleciona('.prata-area').append(prataItem)

    // preencher os dados de cada prata
    preencheDadosDaspratas(prataItem, item, index)
    

   



}) 

