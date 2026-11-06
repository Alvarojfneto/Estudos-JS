/* 
Desafio: Analisador de Números
Missão: construir um programa em JavaScript que receba dois números inteiros, representando o início e o fim de uma sequência, e produza um relatório.

O programa deverá:
1. Validar se os dois valores são inteiros e se o início é menor ou igual ao fim.
2. Percorrer a sequência incluindo os dois limites.
3. Contar quantos números são pares.
4. Somar todos os números pares encontrados.
5. Exibir o relatório final uma única vez.
*/

let inicio = 1
let fim = 10
let qpar = 0
let spar = 0
    if (!Number.isInteger(inicio) || !Number.isInteger(fim) || inicio > fim) {
        console.log ("ERRO!, PRECISAMOS D UM NUMERO INTEIRO E O INICIO DEVE SER MENOR OU IGUAL AO FIM")
    } else {
        for (let i = inicio ; i <= fim ; i++) {
            if (i % 2 === 0) {
            spar += i
            qpar = qpar + 1
            }
        }
        console.log (`A quantidade de numeros pares é ${qpar}`)
        console.log (`A soma dos numeros pares é ${spar}`)
    }
   