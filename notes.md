# Node.js

- `REPL` significa *Read Eval Print Loop*, que representa um computer environment, como um console do Windows por exemplo. 

- Usando o comando `node` no terminal, entramos no ambiente de interpretador do Node. A partir daí podemos utilizar este ambiente com sintaxes Javascript.

# Javascript

- O **Javascript** é uma linguagem 'case sensitive', ou seja, é reconhecida a diferença entre letras maiúsculas e minúsculas. Ex.: o código `Console.log();` não funcionaria, pois começa em maiúsculo.

## Básico

- `console.log()` = Imprime na tela o que quer que seja referenciado.

- `//` = Adiciona um comentário.

- `${expression}` = Feita para ser usado em *strings*, essa sintaxe concatena uma *string* com uma expressão qualquer (ex.: variáveis). É necessária a utilização de crase.

## Variáveis

- `var <varName> = <varValue>` = Declara uma variável. Variável são valores que podem ser alterados no futuro.

- `const <constName> = <constValue>` = Declara uma constante. Constantes são valores fixos que não podem ser alterados ao longo do programa.

- `let <letName> = <letValue>` = Declara uma variável que só pode ser usada dentro do bloco em que foi declarada.

- As `Var` e `Let` podem ser alteradas no futuro apenas mencionando o seu nome e declarando o seu novo valor. Ex.: `varName = false;`.

## Operadores Aritméticos

- `+`, `-` = Caracteres, respectivamente, de Adição e Subtração.

- `*`, `/` = Caracteres, respectivamente, de Multiplicação e Divisão.

- `**` = Caractere de Potenciação.

- `<num> ** (1/<root>)` = Radiciação. Não existe caractere que a represente.

- `==` = Sinal de equalidade.

## Conversão de tipos

- `parseInt` = Converte um *string* para número inteiro.

- `parseFloat` = Converte um *string* para número racional.

## Funções

- `function <fName>(parameter) {fContent}` = Cria uma função. Adicione as instruções entre as chaves, qualquer parametro recebido entra entre parênteses;