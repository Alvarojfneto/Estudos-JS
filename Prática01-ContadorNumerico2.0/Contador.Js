/*
Missão: reconstruir sem olhar o código pronto. Tempo sugerido: 1h45–2h15.
OBJETIVO
Reproduzir a ideia do exercício guiado partindo de uma página em branco, para verificar o que realmente foi 
aprendido.
Enunciado
Crie uma página com um campo numérico (1 a 100), botão Adicionar, lista de valores e botão Finalizar. 
Aceite apenas inteiros válidos e não repetidos. Ao finalizar, mostre quantidade, maior, menor, soma e média.
Missões em ordem
☐ Desenhar o fluxo do programa em português antes de abrir o VS Code. V
☐ Escrever HTML básico com input, botões, select e área de resultado.V
☐ Capturar os elementos pelo DOM e criar um array para os valores. V
☐ Validar faixa, inteiros, vazios e duplicidade; exibir mensagem útil.v
☐ Adicionar cada número ao array e à lista visível; limpar campo e devolver foco.v
☐ Finalizar os cálculos e mostrar o relatório sem apagar os botões.v
*/

let tnumero = document.getElementById ('tnum')
let lista = document.getElementById ('tlista')
let result = document.getElementById ('res')
let valores = []


function adicionar () {
    if (tnumero.value === "" ) {
        window.alert ("Erro! Informações incompletas!")
        return
    }
    let num = Number(tnumero.value)
    if (isNumero(num)) { // FAZ O CHAMADO DAS FUNÇÕES IsNumero e isLista passando o parametro num.
        isLista(num)
        } else {
        window.alert ("Número Inválido!")
        }
}

function isNumero (num) {
    if (num >=1 && num <= 100 && Number.isInteger(num)) {
        return true
        } else {
        return false
        }
}

function isLista (num) {
    if (valores.includes(num)) {
        window.alert ('Erro! O número já foi cadastrado.')
        } else {
        valores.push(num)

        let item = document.createElement ('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
        
        result.innerHTML = ''
        tnumero.value = ''
        tnumero.focus()
        }
        
}
    function finalizar () {
        let quantidade = valores.length
        if (valores.length === 0) { // AQUI EU IGUALO A ZERO PARA SABER SE O ARRAY ESTA VAZIO
            window.alert ('ERRO! ADICIONE VALORES ANTES DE FINALIZAR.')
            return
        }
        let maior = (Math.max(...valores)) // METODO PARA PERCORRER O ARRAY ATRAS DO MAIOR VALOR
        let menor = (Math.min(...valores)) // METODO PARA PERCORRER O ARRAY ATRAS DO MENOR VALOR
        let soma = 0
        let media = 0
        for (let i = 0; i < valores.length; i++) {
            soma += valores [i]
        }
         media += soma / valores.length // MEDIA FICA FORA DO FOR, ELA SÓ PRECISA SER CHAMADA APOS SOMA ESTAR COMPLETA.
        result.innerHTML = `<p> A quantidade de numeros adicionados foi ${quantidade}</p>`
        result.innerHTML += `<p> O maior valor encontrado foi ${maior}</p>`
        result.innerHTML += `<p> O menor valor encontrado foi ${menor}</p>`
        result.innerHTML += `<p> A soma dos valores é igual a ${soma}</p>`
        result.innerHTML += `<p> A média dos valores é igual a ${media}</p>`
    }
 


