// Fixed test program for alura-javascript courses codes

/* -1-
console.log("Hello world!");

const age = 26;

console.log(age);
console.log(age * 78);

const ageSum = age + 2;

console.log(ageSum);
*/

/* -2-
//Console.log("Trabalhando com Variáveis"); doesn't work
console.log("Trabalhando com Variáveis");
// Javascript is case sensitive

const idade = 29;
const nome = "Scarlet";

// ano = 2020; // this is not cool practice at first statement


*/

/* -3-
console.log("Arithmetic Operations");

console.log(2 + 2);
console.log(10 + 8 * 2);
console.log((10 + 8) * 2); // expressions between parenthesis is the major priority

console.log("year" + 2020); // concatenation, result: year2020
console.log("2" + "2"); // result: 22
*/

/* -4-
console.log("Type Conversion");

console.log(2+2);
console.log(parseInt("2") + parseInt("2")); // converting string into Int number, for Float use *parseFloat()*

console.log("2" / "2"); // NaN means "Not a Number"

console.log(6.5); // Float number
*/

/* -5-
console.log('Working with Variable Atribuition');
var age; // declaring variable
age = 29; // attributing value
age++; // adding 1 to the current value
const fName = 'Scarlet';
const sName = 'Begonias';

console.log(`My name is ${fName} ${sName}`); //attention in the backticles (`.`)

// fName = fName + sName; // constant can't be changed
*/

/* -6-
console.log('Working with arrays');

const cityList = [
    
    ' Salvador',
    ' São Paulo',
    ' Rio de Janeiro'
]

cityList.push(' Curitiba'); // adding item on array
cityList.splice(1,1); // removing item from array

console.log('Cities:' + cityList + '.'); // printing array
console.log('City:' + cityList[1]); // selecting a item from array
*/

/* -7-
console.log('---Logic Operators---');
console.log('');

const age = 15;
const withParent = false;
const ticket = true;
const cityList = [
    
    ' Salvador',
    ' São Paulo',
    ' Rio de Janeiro',
    ' Curitiba'
]

if(ticket) {

    if(age >= 18 || withParent == true){

        console.log('Cities:' + cityList + '.');
    } else {

        console.log("Sorry, we can't sell packs for anyone under 18."); // *""* used 'cause *''* conflicts
    }
} else {

    console.log('You need a ticket!');
}

console.log('');
*/

/* -8-
console.log('\n---Loops---\n');

const age = 18;
const withParent = false;
const ticket = false;
const destination = ' Curitiba';
const cityList = [
    
    ' Salvador',
    ' São Paulo',
    ' Rio de Janeiro',
    ' Curitiba'
]
const canBuy = age >= 18 || withParent;

console.log('Cities:' + cityList + '.\n');

let destExist = false;

let i = 0;
while(i < 4) {

    if(cityList[i] == destination) {

        console.log("Completed!\n");
        destExist = true;
        break;
    }
    i++;
} // The 'while' way.

for(var i = 0; i < 4; i++) {

    if(cityList[i] == destination) {

        destExist = true;
        break;
    }
} // The 'for' way.

if(cityList[i] != destination) {

    console.log("Sorry, we don't have this destination. Yet!\n");
}

if(canBuy && destExist) {

    console.log("Have a nice trip!\n");
}*/