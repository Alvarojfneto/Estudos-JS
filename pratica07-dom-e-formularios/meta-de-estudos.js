/* =========================================================================
   DIA 05 - DOM E FORMULÁRIOS: MINHA META DE ESTUDOS
   
   O que a aplicação faz:
   - Captura minutos planejados e estudados do HTML.
   - Calcula a porcentagem de conclusão da meta e a diferença de tempo.
   
   Lógica e Aprendizados aplicados:
   1. DOM: Uso de document.getElementById para ler (.value) e escrever (.innerHTML).
   2. TIMING: Captura de valores movida para dentro da função para ler no clique.
   3. VALIDAÇÃO: Bloqueio de valores negativos, zeros ou campos vazios (Number("") = 0).
   4. CONTROLE DE FLUXO: Uso de if / else if / else para não esmagar variáveis.
   5. DESAFIO EXTRA: Cálculo reverso (faltam) para metas não atingidas, 
      trazendo uma resposta mais amigável ao usuário.
========================================================================= */
// CACHE DO DOM (TUDO AQUI FORA!)
let planejado = document.getElementById("txtplan") // pesca os inputs fora da função principal - melhor forma de escrever
let estudado = document.getElementById("txtreal") // pesca os inputs fora da função principal  - melhor forma de escrever
let resultado = document.getElementById("resultado") // pesca os inputs fora da função principal  - melhor forma de escrever

// FUNÇÃO PARA GERAR O RELATÓRIO + TESTES DE VALIDAÇÃO + EXIBIÇÃO DE RESULTADO
function calcular () {
let valorPlan = Number(planejado.value)
let valorEst = Number(estudado.value)
let atingiu = ""

if ( valorPlan <= 0|| isNaN(valorPlan)) { // a função nativa isNaN() é usada para barrar textos em inputs que devem ser numéricos
    resultado.innerHTML = "Erro! Verifique as informações fornecidas."
    return ;
} 
if (valorEst < 0|| isNaN(valorEst)) {
    resultado.innerHTML = "É necessário informar os minutos estudados."
    return ;
} 
    let porcent = (valorEst / valorPlan ) * 100
    porcent =  Math.round(porcent); // Math - ferramenta matematica do js que arredonda os valores -> fica mais bonito/funcional para ser exibido. - tem que usar em let
    const diferenca = valorEst - valorPlan
if (porcent < 100) {
    let faltam = valorPlan - valorEst
    atingiu = `Meta não atingida! Faltaram ${faltam} minutos para você completar`;
} else if (porcent === 100) {
    atingiu = "Meta atingida!";
} else {
    atingiu = `Meta superada em ${diferenca} minutos!`;
}
resultado.innerHTML =`Seu percentual de estudos na sessão foi de ${porcent} % , ${atingiu}`
}

// FUNÇÃO LIMPAR 
