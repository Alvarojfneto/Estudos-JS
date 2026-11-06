/*
Exercício B — Contagem regressiva
Receba início, fim e passo positivo. Mostre uma sequência decrescente até o limite, incluindo-o quando 
alcançado. Impeça passo zero ou negativo.
*/

let inicio = 9
let fim = 1
let passo = 2
let res = '' // novamente, res foi declarado como uma string vazia para poder concatenar os valores dentro do for.

if (passo <=0 || inicio < fim) {
    console.log ("Erro. Verifique as informações fornecidas.")
} else {
for (let i = inicio; i >=fim ; i -= passo) {
    res += `${i},`
}
console.log(res.slice(0, -1))
}
