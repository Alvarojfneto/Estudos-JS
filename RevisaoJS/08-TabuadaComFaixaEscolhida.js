/*
06. Tabuada com faixa escolhida
Treina: Separação entre base fixa e multiplicador.
Missão: Defina a base e dois multiplicadores inteiros: primeiro e último. Gere apenas essa faixa, com
primeiro menor ou igual ao último. A base deve permanecer inalterada durante o laço.
Casos para testar: Base 4, multiplicadores de 3 a 7; base 0, de 1 a 4; base negativa, de 2 a 5; primeiro
igual ao último.
Confira por conta própria: Confira cada produto manualmente. Trocar a base não deve mudar o
intervalo de multiplicadores escolhido. O total de linhas deve corresponder à faixa.




*/
let inicio = 3
let fim = 7
let base = 4

for (let i = inicio ; i <=fim ; i = i+1) {
    let mult = base * i
    console.log(`${base} x ${i} = ${mult}`)
}