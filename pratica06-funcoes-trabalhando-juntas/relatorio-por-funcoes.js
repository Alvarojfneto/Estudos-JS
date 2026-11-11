/*
Exercício B — Relatório por funções
Reutilize pelo menos duas funções do exercício A para produzir um relatório de três valores. A função de
cálculo deve devolver um resultado; a exibição no console deve ficar fora dela.
*/


// 1. Ferramentas do exercicio A
// não é possivel reaproveitar funções que não estão no arquivo. -> Recurso chamado Módulo - export e import - ainda não aprendi.
function somararray (numeros) { 
    let soma = 0
    for (let i = 0; i < numeros.length ; i++) {
        soma = soma + numeros [i];
    }
    return soma; 
}

function calcularMedia (numeros) {
   let soma = somararray(numeros);
   let media = soma / numeros.length;
   return media;
}

// 2. O gerente do exercicio B

 function fazerRelatorios (numeros) {
     let total = somararray(numeros); // preciso guardar o resultado da chamada da função em uma variável.
     const med = calcularMedia(numeros);
     let msg = `A soma dos valores é igual a ${total} e a média é ${med}`;
     return msg;
    
     }
     // 3. A execução
     console.log(fazerRelatorios([8, 6, 10]));
    
 