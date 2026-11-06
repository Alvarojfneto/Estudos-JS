/*
03. Somador de intervalo
Treina: Contador e acumulador com papéis separados.
Missão: Defina dois inteiros positivos, com início menor ou igual ao fim. Some todos os inteiros desse
intervalo e mostre apenas o total ao final.
Casos para testar: Intervalos de 1 a 4, de 3 a 6 e de 5 a 5.
Confira por conta própria: Faça a soma no papel e compare com seu programa. O total é exibido uma
vez e uma nova execução não reaproveita indevidamente a soma anterior.
*/

let inicio = 1
let fim = 4
let soma = 0 

for ( let contador = inicio ; contador <= fim ; contador ++) {
    soma += contador
}
    console.log (soma)

/*
Use sempre estas três perguntas:
Parte	Pergunta
Inicialização -	Qual é o primeiro valor que quero usar?
Condição -	Enquanto quais valores posso continuar?
Atualização	 - Como chego ao próximo valor?


O ponto principal é este: a condição descreve quando o laço deve continuar executando.

Antes de executar, confira mentalmente três situações:
- O primeiro valor precisa passar no teste.
- O último valor desejado precisa passar no teste.
- O próximo valor, depois do último, precisa falhar.
*/