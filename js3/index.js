// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

//--------referencing all modules--------

import { checkAcc } from "./modules/CheckAccount.js";
import { client } from "./modules/Client.js";
import { savAcc } from "./modules/SavingsAccount.js";
import { account } from "./modules/Accounts.js";

//--------configuring checking accounts accounts--------

const client1 = new client(

    'Kamily',
    15691816756,
    296310204
)

const client2 = new client(

    'Nicolas',
    19504392750,
    327101333
)

const account1 = new account(

    client1, //client info
    1002, //agency
    0 //initial balance
)

const account2 = new account(

    client2,
    1002,
    0
)

//--------operations--------

/* const deposit1 = savAcc1.deposit(100);
console.log('Deposit value:', deposit1);
const transfer1 = savAcc1.transfer(50, savAcc2);
console.log('Transferred:', transfer1);
const withdraw1 = savAcc1.toWithdraw(25);
console.log('Withdraw value', withdraw1); */

//--------printing checking accounts status--------

console.log('');

console.log(account1);

console.log(account2);

console.log('');

//console.log('We have now', checkAcc.accountNum, 'checking accounts.');
