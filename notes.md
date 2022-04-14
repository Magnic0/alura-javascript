# Node.js

- `REPL` significa *Read Eval Print Loop*, que representa um computer environment, como um console do Windows por exemplo. 

- Usando o comando `node` no terminal, entramos no ambiente de interpretador do Node. A partir daí podemos utilizar este ambiente com sintaxes Javascript.

# Javascript

- O **Javascript** é uma linguagem 'case sensitive', ou seja, é reconhecida a diferença entre letras maiúsculas e minúsculas. Ex.: o código `Console.log();` não funcionaria, pois começa em maiúsculo.

## Básico

- `console.log()` = Imprime na tela o que quer que seja referenciado.

- `//` = Adiciona um comentário.

### Templates

Para consulta mais detalhada, confira [esse artigo da Alura](https://www.alura.com.br/artigos/tagged-template-literals). feito pelo Paulo Scarlecio, sobre Tagged Template Literals.

#### Literals

- `${}` = Declarada dentro de uma *string* ``Lorem ipsum ${expression}}``, *Template Literals* é usada para interpolar (concatenar) uma *string* com outra expressão, podendo ser uma *string*, uma expressão numérica ou até mesmo uma variável. É necessário usar os *backtics* (acento grave) no lugar de aspas na declaração da *string* para que a chamada funcione. Exemplo:

```
const word = 'interpolated';
console.log(`My ${word} Template Literal.`);

//output: "My interpolated Template Literal."
```

#### Tagged

A *Tagged Template* é a chamada de uma função feita através da utilização da *Template Literals*.

Normalmente declaramos e chamamos uma função conforme explicado [aqui](#funções). Porém, ao utilizar *Tagged Template Literals*, a chamada de uma função ocorre assim:

```
fname`string as parameter`;
```

Ambas as chamadas não são equivalentes, ou seja, quando utilizamos *Tagged Template Literals* para realizar a chamada de uma função, a forma como passaremos um parâmetro varia de acordo com o tipo de valor usado.

Por exemplo, quando a nossa Template Literal é composta por apenas uma string, nosso parâmetro é declarado como um *array*:

```
fname(['text as parameter']);
fname`text as parameter`;
```

No caso acima, as chamadas são equivalentes. Porém, no caso da declaração como *array*, podemos concatenar valores de variáveis, confira o exemplo:

```
fName = (stringArray, word) =>{

    console.log(`${stringArray[0]}${word}${stringArray[1]}`);
}

const word = 'alura';

fName`I study at ${word} everyday.`;
```

Caso sinta a necessidade de mais detalhes e outros exemplos práticos, visite o link referenciado [lá em cima](#templates).

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

## Clases e Funções

### Funções

No Javascript, é possível criarmos nossas próprias funções, existem duas formas (conhecidas por quem vos fala) de fazer isso:

1. `function <fName>(parameter) {fContent}` = Cria uma função. Adicione as instruções entre as chaves, qualquer parametro recebido entra entre parênteses;
2. `fname = (parameter) => {fcontent}` = Declaração de função de forma simplificada.

- `variable.replace(toBeReplaced, toReplace)` = A função `replace` recebe 2 parâmetros: o primeiro sendo o padrão que procuramos e o segundo o retorno que desejamos no local desse padrão. Em uma `string`, o `.replace` sempre vai procurar pela primeira ocorrência do padrão declarado, portanto, pode-se resolver esse problema utilizando a declaração `/toBeReplaced/g`, onde `g` informa ao Javascript que é necessário encontrar todas as ocorrências naquela `string`. Para mais informações, acesse este [guia de bolso](https://www.regular-expressions.info/refquick.html).

### Classes

==work in progress==

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

## Loops

Loops oferecem a possibilidade de realizar uma ação repetidamente, de forma fácil e rápida.
Utiliza-se uma estrutura parecida com a das **Declarações Condicionais**: uma condição especificada e um código a ser executado caso aquela condição retorne `true`. Porém nesse caso, o código será executado repetidamente até a condição retornar `false`.

- `while(condition) {script}` = Executa o *loop* caso a condição especificada retorne o valor booleano `true`.

Uma boa forma de determinar um *ponto final* ao loop é criar uma variável e dentro do `{script}` adicionar uma instrução para que toda vez que o mesmo seja executado, essa variável mude. Exemplo:

```
var timer = 0;
while(timer <= 10) {

    console.log('Counting: ' + timer)
    timer++
}
```

No código acima, a variável `timer` começa em 0. Ao executar o `{script}`, o computador adiciona o valor '1' à essa variável (`timer++` é uma abreviação para `timer = timer + 1`, o mesmo pode ser feito no caso de subtração) e imprime no console.
Quando `timer` atingir o valor '10', o loop é quebrado e o computador fica livre para executar as próximas linhas de código.

*A condição pode ser armazenada dentro de uma variável e essa pode ser declarada nos loops.*

- `for(variable; while; increment) {script}` = Funciona como o while, porém a declaração de condição fica ligeiramente diferente, podendo-se declarar a variável e o incremento no bloco de condição. Esse formato é muito mais comum de ser encontrado.

- `break;` - Esse comando quebra um loop imediatamente ao ser executado.

# Debug

Este ainda é um tópico pouco conhecido pelo autor dessas notas. Conforme for adquirindo conhecimento sobre, serão adicionadas atualizações.