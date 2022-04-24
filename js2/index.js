// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

//--------referencing all modules--------

import { checkAcc } from "./modules/CheckAccount.js";
import { client } from "./modules/Client.js";

//--------configuring checking accounts accounts--------

const client1 = new client(
    
    'White', //name
    19216810130, //cpf
    456987326 //rg
)
const checkAcc1 = new checkAcc(
    
    client1, //client data
    1001 //client agency
)

const client2 = new client(
    
    'Alice',
    15645675450,
    330344780
)
const checkAcc2 = new checkAcc(
    
    client2,
    1001
)

const client3 = new client(

    'Kamily',
    15691816756,
    296310204
)

const checkAcc3 = new checkAcc(

    client3,
    1002
)

const client4 = new client(

    'Nicolas',
    19504392750,
    327101333
)

const checkAcc4 = new checkAcc(

    client4,
    1002
)

//--------operations--------

checkAcc1.deposit(3000);
checkAcc1.transfer((275), checkAcc2);
//const withdrawValue = checkAcc1.toWithdraw(50);
//console.log('Withdraw Value: US$', withdrawValue);

checkAcc3.deposit(15000);
checkAcc3.transfer((5000), checkAcc4);

//--------printing checking accounts status--------

console.log('\n', checkAcc1);

console.log('\n', checkAcc2);

console.log('\n', checkAcc3);

console.log('\n', checkAcc4);

console.log('');

console.log('We have now', checkAcc.accountNum, 'checking accounts.');
