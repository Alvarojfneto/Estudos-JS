/* =========================================================================
   DIA 06 - MINIPROJETO: CAIXA DE PEDIDOS (TAI ATELIER)
   
   O que a aplicação faz:
   - Simula um Ponto de Venda (PDV). Permite adicionar itens a um carrinho,
     valida quantidades, armazena subtotais na memória e gera um relatório 
     final com cálculo de descontos baseado em regras de negócio.
   
   Lógica e Aprendizados aplicados:
   1. ESTRUTURA DE DADOS: Uso de Array [] e do método .push() para guardar 
      um histórico de valores na memória a cada clique.
   2. DOM ACUMULATIVO: Uso do operador += no innerHTML para adicionar novos 
      elementos na tela sem apagar os anteriores.
   3. LAÇOS E ACUMULADORES: Uso do laço 'for' para varrer o Array e somar 
      todos os valores em uma variável 'totalBruto'.
   4. VALIDAÇÃO AVANÇADA: Uso de Number.isInteger() para barrar decimais, 
      pois não se vende "meio" produto.
========================================================================= */

// pescando o DOM
let carrinhoSubtotais =[];
let tprod = document.getElementById('produtos')
let tquant = document.getElementById('txtquant')
let carrinho = document.getElementById('carrinho')
let relatorio = document.getElementById('relatorio')

// Iniciando a função adicionar ()
function adicionar () {
    let preco = Number(tprod.value)
    let quant = Number(tquant.value)
    
    if (quant <= 0 || !Number.isInteger(quant)) {
        window.alert ("Erro! Digite uma quantidade válida (número inteiro maior que zero).")
        return
    }

    
    let subtotal = preco * quant
    carrinhoSubtotais.push(subtotal); // guarda na memória
    console.log(carrinhoSubtotais); // mostrar o caminho do array
    
    let nomeProduto = tprod.options[tprod.selectedIndex].text;
    carrinho.innerHTML += `<p>${quant} x ${nomeProduto} - Subtotal: R$ ${subtotal}</p>`

    tquant.value = "";
    tquant.focus();
}

// função finalizar - verificação de carirnho vazio, somatório, regra do negócio, matemática final e relátorio

function finalizar() {
    if(carrinhoSubtotais.length === 0) {
        window.alert ("Insira produtos antes de finalizar.")
        return;
    }
    let totalBruto = 0
    for (let i = 0 ; i < carrinhoSubtotais.length; i++){
        totalBruto = totalBruto + carrinhoSubtotais[i]
    }
    let desconto = 0 
    if (totalBruto >= 200 ) {
        desconto = totalBruto * 0.05 // sempre usar . e não virgula.
    }
    let totalFinal = totalBruto - desconto; 
    // escrever apenas uma linha atribuindo todas as saidas, quando se tem o caso de atualização dessa saida, é uma maneira de poupar esforço de memória. 
    relatorio.innerHTML = ` 
        <p><strong>Quantidade de lançamentos:</strong> ${carrinhoSubtotais.length}</p> 
        <p><strong>Total bruto:</strong> R$ ${totalBruto.toFixed(2)}</p>
        <p><strong>Desconto recebido:</strong> R$ ${desconto.toFixed(2)}</p>
        <p><strong>Valor final do pedido:</strong> R$ ${totalFinal.toFixed(2)}</p>
    `;
} 
