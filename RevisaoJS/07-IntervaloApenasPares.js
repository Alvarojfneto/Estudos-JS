/*
05. Intervalo só de pares
Treina: Repetição combinada com uma decisão.
Missão: Defina dois inteiros com início menor ou igual ao fim. Percorra o intervalo e exiba apenas os
pares. Como extensão, conte quantos pares encontrou.
Casos para testar: Intervalos de 1 a 7, de 2 a 2 e de 3 a 3.
Confira por conta própria: Nenhum ímpar deve ser exibido. A contagem adicional precisa registrar
quantos números foram mostrados. Se precisar, pesquise o significado do operador de resto %, sem
procurar a solução do exercício.
*/


let inicio = 1
let fim = 7
let passo = 1
let quantidade = 0

for (let i = inicio ; i <= fim; i = i + passo) {
  if (i % 2 ===0) {
    console.log (`numero par: ${i}`)
    quantidade = quantidade + 1 
  }  
}
console.log (`a quantidade de numeros pares é : ${quantidade}`)
