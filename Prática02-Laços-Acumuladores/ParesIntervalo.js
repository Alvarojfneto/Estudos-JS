/* 
Enunciado
Desenvolva um programa JavaScript que receba dois números inteiros, inicio e fim, e percorra o intervalo inclusivo para:
1. Identificar os números pares.
2. Contar quantos números pares foram encontrados.
3. Calcular a soma desses números.
4. Exibir o relatório apenas depois de terminar o laço.
*/

let inicio = 1
let fim = 10
let npar = ""
let qpar = 0
let soma = 0

if (inicio > fim) {
    console.log ("Entrada Invalida!.")
}else {
for ( let i = inicio ; i <= fim ; i++) {
    if (i % 2 === 0) {
        npar += `${i},`
        qpar += 1 
        soma += i
    }
}
 console.log (`Os numeros pares dentro do intervalo são: ${npar.slice(0, -1)}`)
 console.log (`A quantidade de numeros pares encontrados foi ${qpar}`)
 console.log (`A soma dos numeros pares é igual a ${soma}`)
}
 
