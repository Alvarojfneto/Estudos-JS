/* 
02. Contagem regressiva até zero
Treina: Direção decrescente e inclusão do limite.
Missão: Defina um inteiro não negativo como partida. Mostre os valores em ordem decrescente,
incluindo zero. Depois escreva uma mensagem de encerramento uma única vez.
Casos para testar: Partidas 5, 1 e 0.
Confira por conta própria: O primeiro valor coincide com a partida; o último é zero. Confira onde
colocou a mensagem final e se ela aparece apenas uma vez.
*/
let contador = 0
for (let partida = contador ; partida >= 0 ; partida --) {
    console.log (partida)
}
console.log ("Terminamos a contagem!")