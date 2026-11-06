/*
Exercício A — Boletim de notas
Armazene em um array quatro notas válidas de 0 a 10. Gere um relatório no console com quantidade, maior 
nota, menor nota, média e quantas notas são iguais ou superiores a 7. Primeiro utilize notas fixas; depois 
tente adicionar uma nota nova.
*/

const notas = [7, 4, 9, 6, 10, 3]
let soma = 0
let media = 0
let maior = notas [0] // preciso referenciar o vetor, se não se colocar só = [0] ele cria um novo array contendo o numero 0
let menor = notas [0]
let quant = notas.length

for (let i = 0; i < notas.length ; i++) {
    soma = soma + notas[i] 
    if (maior < notas [i]) {
        maior = notas [i]
    }
    if (menor > notas [i] ) {
        menor = notas[i]
    }
}
    media = soma / notas.length
    let maiorMedia = 0
    for (let c = 0; c < notas.length; c++) {
        if (notas [c] >= media ) {
            maiorMedia = maiorMedia + 1 
    }
}
    console.log (`Quantidade de notas: ${quant}`)
    console.log (`Soma das notas: ${soma}`)
    console.log(`Média das notas: ${media}`)
    console.log (`Maior Nota: ${maior}`)
    console.log (`Menor nota: ${menor}`)
    console.log (`Notas acima na média ou acima: ${maiorMedia}`)
