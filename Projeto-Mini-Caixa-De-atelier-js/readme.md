# 🛒 Mini Caixa de Pedidos (PDV) — Tai Atelier

> Projeto desenvolvido como parte do meu processo de transição de carreira para a T.I. e estudos práticos em desenvolvimento Full Stack, aplicando JavaScript puro (Vanilla JS), HTML5 e CSS3.

---

## 💡 Sobre o Projeto
Este é um sistema de Ponto de Venda (PDV) de página única simulando os pedidos de um ateliê de peças artesanais. O objetivo principal deste exercício foi consolidar conceitos fundamentais de lógica de programação, manipulação dinâmica do DOM e persistência de dados em memória utilizando arrays.

Abaixo, explico a lógica por trás das principais funcionalidades desenvolvidas no código:

### ⚙️ Como o sistema funciona (Por trás dos códigos)

* **A Função `adicionar()`:** 
  > *"A função adicionar captura os inputs de seleção de produtos e de quantidades. Faz uma verificação para garantir a funcionalidade da função, evitando que o campo quantidade seja preenchido com algum valor inválido dentro da lógica de funcionamento do mini-mercado ou que deixe alguma informação em branco. Posteriormente, define a variável `subtotal` e joga seu resultado para dentro do array `carrinhoSubtotais[]`. A variável `nomeProduto` é a responsável por dar a mensagem de saída da 'simulação de compra do cliente' dentro do carrinho."*

* **A Função `finalizar()`:** 
  > *"A função `finalizar()` possui uma verificação que impede de ser executada caso o carrinho esteja vazio. A variável `totalBruto` é declarada valendo zero e sendo adicionada mediante o percurso de um laço `for` condicionado aos elementos do array `carrinhoSubtotais`. A variável `desconto` é condicionada a um `if`, ela só é acrescida de valor quando a compra do cliente é superior a R$ 200,00. Por fim, temos a declaração de `totalFinal` que guarda o `totalBruto - desconto`. As mensagens de exibição do relatório de compras do cliente são declaradas dentro de uma única estrutura `innerHTML`, possibilitando que, a cada nova simulação, seja gerado um novo relatório atualizado."*

---

## 🛠️ Tecnologias Utilizadas
Como um desenvolvedor em estágio inicial de prática, foquei em dominar as ferramentas nativas da web sem o uso de frameworks ou bibliotecas externas:
- **HTML5:** Estrutura e marcação semântica dos formulários.
- **CSS3:** Estilização limpa baseada em *box-model*, organização visual em formato de "Cartão de PDV" e responsividade básica.
- **JavaScript : 
  - Manipulação de DOM e otimização com template literals (`+=` e `=` direcionados).
  - Estruturas de dados com Arrays (`.push()`).
  - Laços de repetição (`for`) e lógica de acumuladores.
  - Validações defensivas (`Number.isInteger()`, `isNaN`).

---

## 🚀 Como Executar Localmente
Por ser uma aplicação front-end pura, você não precisa instalar servidores, Node.js ou dependências complexas:
1. Faça o download ou clone este repositório em sua máquina.
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` (ou abra-o diretamente no seu navegador de preferência, como Chrome, Edge ou Firefox).

---

## 📈 Próximos Passos e Evoluções Futuras
Como estou construindo minha base gradualmente, planejo evoluir este projeto nas próximas etapas dos meus estudos com:
- [ ] Implementação de um botão "Limpar Carrinho".
- [ ] Salvamento dos dados utilizando o `localStorage` do navegador (para não perder o histórico ao atualizar a página).
- [ ] Cores dinâmicas no relatório baseadas no status da compra.