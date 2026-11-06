# Estudos-JS

Repositório com meus estudos e mini projetos de JavaScript, organizados por tema.
Cada pasta reúne exercícios que praticam um conjunto de conceitos.

## Projetos

### 📁 Analisador Numerico 2.0 (DOM)
Página web interativa em que o usuário informa números de 1 a 100, monta uma lista
e, ao finalizar, recebe um relatório com **quantidade, maior valor, menor valor, soma e média**.

- **Validações:** campo vazio, número fora da faixa, não inteiro e número repetido.
- **Conceitos praticados:** manipulação do DOM (`getElementById`, `createElement`,
  `appendChild`, `innerHTML`), eventos (`onclick`), arrays (`push`, `includes`),
  `Math.max`/`Math.min`, spread operator, laço `for`, funções, template strings.
- **Arquivos:** `HOME.html`, `Estilo.CSS`, `Contador.Js`
- **Como executar:** abra o `HOME.html` no navegador.

### 📁 Laços-Acumuladores
Exercícios no console que percorrem intervalos numéricos usando `for`,
condicionais e variáveis acumuladoras (contador, soma e string de resultado).

- **`Multiplosde3.js`:** lista os múltiplos de 3 em um intervalo, com quantidade e soma.
- **`ParesIntervalo.js`:** identifica os números pares em um intervalo, com quantidade e soma.
- **`passoAtualizado.js`:** contagem regressiva com passo personalizado.
- **Conceitos praticados:** laço `for` (crescente e decrescente), operador módulo `%`,
  acumuladores, concatenação com template strings, `slice` para formatar a saída,
  validação de entradas inválidas.
- **Como executar:** `node nome-do-arquivo.js`

### 📁 Arrays-Relatorios
Analisador de notas que percorre um array e gera um relatório no console.

- **`RelatorioDeNotas.js`:** calcula quantidade, soma, média, maior nota,
  menor nota e quantas notas estão acima da média.
- **Conceitos praticados:** arrays, acesso por índice, laço `for` percorrendo
  array, lógica de maior/menor, cálculo de média, template strings.
- **Como executar:** `node RelatorioDeNotas.js`