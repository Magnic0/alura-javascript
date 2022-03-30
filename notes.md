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

## Arrays

Arrays são listas onde pode se guardar vários valores dentro de uma só variável. A declaração de *arrays* é similar a de variáveis, apenas sendo necessária adição da instrução `new Array()`, ex: `const list = new Array('exString', exVariable, exNum)`.

- Arrays podem ser simplificados em sua declaração da seguinte forma: `const list = ['exString, 'exNum']`.

- É possível selecionar um item específico no *array* através da instrução `arrayName[itemPlace]`.

## Operadores Aritméticos

- `+`, `-` = Caracteres, respectivamente, de Adição e Subtração.

- `*`, `/` = Caracteres, respectivamente, de Multiplicação e Divisão.

- `**` = Caractere de Potenciação.

- `<num> ** (1/<root>)` = Radiciação. Não existe caractere que a represente.

- `==` = Sinal de equalidade.

- `!=` = Sinal de diferença. 

- `>` `<` = Maior e menor que.

- `>=`, `<=` = Maior ou igual, menor ou igual.

## Conversão de tipos

- `parseInt` = Converte um *string* para número inteiro.

- `parseFloat` = Converte um *string* para número racional.

## Funções

- `function <fName>(parameter) {fContent}` = Cria uma função. Adicione as instruções entre as chaves, qualquer parametro recebido entra entre parênteses;

## Operadores Lógicos.

Os Operadores Lógicos são usados com operações com valores *boolean*, ou seja, `true` ou `false`. Os caracteres que representam os Operadores Lógicos são:

- `&&` = Tem o mesmo papel da vírgula, serve para declarar mais de uma condição.

- `||` = Informa que apenas uma das duas condições informadas devem ser consideradas. É um "*ou*", do Javascript.

- `!` = Declara falsa uma condição, funciona como o "*não*" do Javascript.

## Declarações Condicionais

As Declarações condicionais são usadas para executar ações baseando-se na condição especificada. Veja um exemplo deste tipo de código:

```
if(ticket == true) {

    if(age >= 18 || withParent == true){

        console.log('Cities:' + cityList + '.');
    } else {

        console.log("Sorry, we can't sell packs for anyone under 18.");
    }
} else {

    console.log('You need a ticket!');
}
```

O código acima verifica se:

1. O usuário comprou um bilhete (`if(ticket == true)`).

2. O usuário é maior de 18 ou está acompanhado por alguém que é (`if(age >= 18 || withParent == true)`).

E em seguida executa o código existente entre as `{}`. 

As mais básicas sintaxes usadas em *if statements* são:

- `if(condition) {script}` = Chama a operação *if* para conferir uma condição e executar um código que responda de acordo com a condição informada.

- `} else {script}` = Executa um código caso a condição não esteja de acordo com a especificada.

- `} else if(secondCondition) {script}` = É usado como contraponto ao `if`, no caso de uma segunda condição especificada.