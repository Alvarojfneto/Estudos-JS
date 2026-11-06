/*
Exercício A — Múltiplos de 3
Dados um início e um fim inteiros, percorra o intervalo inclusivo e mostre os múltiplos de 3, sua quantidade 
e sua soma. Trate início maior que fim como entrada inválida.
*/

let inicio = 5
let fim = 5
let quant = 0
let soma = 0
let mult = "" // aqui começa vazio para ser identificado como string e poder concatenar os valores dentro do for.
if (inicio > fim) {
    console.log('Erro! Entrada Inválida.')
} else {
for (let i = inicio ; i <= fim; i++) {
    if (i % 3 === 0) {
        quant +=1
        soma = soma + i 
        mult += ` ${i},`
    }
}
if (quant ===0) {
    console.log ("Nenhum múltiplo encontrado.")
} else {
console.log (`A quantidade de numeros é ${quant}`)
console.log (`A soma dos numeros é ${soma}`)
console.log (`Os Multiplos são ${mult.slice(0, -1)} `) // mult.slice retira parte de uma string. (0, -1). o 0 identifica que tem que extrair partindo do primeiro, -1 determina que seja o ultimo caractere.
}
}   