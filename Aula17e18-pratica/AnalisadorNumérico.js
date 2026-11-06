/* tentativa sozinho
function Adicionar () {
    const camponum = document.getElementById ('numero')
    let num = Number(camponum.value)
    if (num > 100 || num < 1 || num = "" ) {
        window.alert ('Erro! Verifique as informações')
}
*/
// resolução junto do professor:
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []  // raciocinei um pouco certo, mas as variaveis para pegar o dom são fora da função e eu precisava declarar um vetor para armazenar os valores.

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}


function adicionar () {
    if (isNumero (num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item =document.createElement('Option')
        item.text = ` Valor  ${Number(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        

    } else {
        window.alert ('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // limpa o local de colocar os valores 
    num.focus() // mantem o foco do teclado dentro da div para adicionar o numero
} 

function finalizar () {
    if (valores.length === 0 ) {
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior ) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
    }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
        res.innerHTML += `<P> O maior valor informado foi ${maior}</P>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<P> A média dos valores digitados é ${media}.</p>`
    }   
}