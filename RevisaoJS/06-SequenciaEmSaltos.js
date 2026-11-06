/*
exercício 4 — Sequência com saltos:
- Defina início, fim e passo positivos, com início menor ou igual ao fim.
- Mostre os valores alcançados sem ultrapassar o fim.
- Recuse passo zero ou negativo antes de executar o laço.
*/

/*for (let i = 2; i<=11; i=i+3) {
    console.log(i)
}
*/

// fazendo a sequencia, com variaveis declaradas antes, facilitando a manipulação do código. no primeiro caso do for, eu declarava quais os valores do inicio, condição e passo. aqui usei atraves das varaiveis.

let inicio = 2
let fim = 11
let passo = 20

if (passo <= 0) {
    console.log ('ERRO! O PASSO DEVE SER MAIOR QUE ZERO')
} else { 
        for (let i = inicio ; i <= fim; i = i + passo) {
         console.log (i)
}
}