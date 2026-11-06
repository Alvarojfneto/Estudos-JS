/*
07. Lista de múltiplos
Treina: Evento, entrada numérica e saída em select.
Missão: Crie um campo para um número base e outro para uma quantidade inteira positiva. Ao clicar,
preencha um select com essa quantidade de múltiplos, começando pelo primeiro múltiplo. Recuse
campos vazios e quantidade inválida.
Casos para testar: Base 5 com quantidade 4; base 0 com quantidade 3; quantidade 1; campos vazios;
quantidade zero ou negativa. Clique novamente mudando a base.
Confira por conta própria: Cada múltiplo ocupa uma opção. A nova lista substitui a anterior. Zero deve
ser aceito como base; vazio precisa ser tratado separadamente de zero.
*/




function calcular (){
const campobase = document.getElementById ('basecalc')
const campomultp = document.getElementById('quant')
const campolista = document.getElementById('lista')

if (campobase.value === "" || campomultp.value === '') {
    window.alert ('ERRO! EXISTEM CAMPOS VAZIOS')
} else {
const cbase = Number(campobase.value)
const cmultp = Number(campomultp.value)

    if (cmultp <=0 || !Number.isInteger(cmultp)) {
            window.alert ('ERRO! A quantidade deve ser um numero inteiro maior que zero.')
        } else { 
            campolista.innerHTML = ""
            for (let c = 1 ; c <= cmultp ; c = c+1) {
                let resultado = cbase * c
                const item = document.createElement('option')
                item.textContent = resultado
                campolista.appendChild(item)
            }
        }
    }
}

