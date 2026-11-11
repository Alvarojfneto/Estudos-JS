/* =========================================================================
   DIA 04 - EXERCÍCIO C: FATORIAL COM LAÇO
   
   O que a função faz:
   - Recebe um número (n) e calcula o seu fatorial (ex: 5! = 5 * 4 * 3 * 2 * 1).
   
   Lógica aplicada:
   1. EXCEÇÃO: Se n for 0, o 'if' intercepta e retorna 1 (regra matemática).
   2. ACUMULADOR: A variável 'res' inicia em 1, pois qualquer número vezes 0 daria 0.
   3. CRONÔMETRO (For): O laço vai de 1 até o valor de 'n'.
   4. DEBUG INTERNO: Um console.log foi adicionado para fazer um "Raio-X" 
      e mostrar cada etapa da multiplicação rodando no terminal.
   5. SAÍDA: O 'return res' entrega o valor final acumulado.
========================================================================= */


function fatorial (n) {
    if (n === 0) {
        return 1
    }  else {
        let res = 1
        for (let i = 1; i <= n; i++) {
            console.log(`Fator atual: ${i}`) // espiando o numero da rodada
            res = res * i
            
        }
        return res // devolve o resultado da conta 
    }
}
console.log(fatorial(5))