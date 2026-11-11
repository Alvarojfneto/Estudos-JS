/*
Exercício A — Caixa de ferramentas
☐ Criar uma função que diga se um número é par, devolvendo true ou false.
☐ Criar uma função que receba dois números e devolva o maior.
☐ Criar uma função que receba um array numérico e devolva sua soma.
☐ Criar uma função que receba um array numérico não vazio e devolva sua média.
*/

// preciso estudar passagem de parametros para funções.

function ispar (numero) {
    
    if (numero %2 === 0 ) {
        return true
    } else {
        return false
    }
}

function ismaior (n1,n2) {
    
    if ( n1 > n2 ) {
        return n1;
    } else { 
        return n2;
  }
}


function somararray (numeros) { // na definição da função cria a regra usando variavel genérica (numeros)
    let soma = 0
    for (let i = 0; i < numeros.length ; i++) {
        soma = soma + numeros [i];
    }
    return soma; // return é a instruçã que manda o js finalizar a execução da função e entregar o valor de volta pra quem a chamou.
    // O return permite criar a esteira de reaproveitamento que usamos no Exercício A: a função calcularMedia só conseguiu pegar o total porque a somararray usou return soma para entregar o valor.
}
console.log(somararray([8,6,10])) // na chamada da função, passo o argumento real que quero que ela calcule.

function calcularMedia (numeros) {
   let soma =somararray(numeros);
   let media = soma / numeros.length;
   return media;
}
console.log(calcularMedia([8,6,10]));

/* =========================================================================
   DIA 04 - EXERCÍCIO A: CAIXA DE FERRAMENTAS (FUNÇÕES)[cite: 7]
   
   1. PARIDADE (ispar):
      - Testa se (numero % 2 === 0)[cite: 7]. Retorna true se for par e false se ímpar.
      
   2. MAIOR NÚMERO (ismaior):
      - Compara dois valores de entrada (n1, n2) e retorna o maior deles[cite: 7].
      
   3. SOMA DE ARRAY (somararray):
      - Usa um acumulador (let soma = 0) e o laço for para somar cada item do array[cite: 7].
      
   4. MÉDIA DE ARRAY (calcularMedia):
      - Reaproveita a função somararray() para pegar o total e divide por numeros.length[cite: 6].
========================================================================= */

