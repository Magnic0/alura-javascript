// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

//--------referencing all modules--------

import { checkAcc } from "./modules/CheckAccount.js";
import { client } from "./modules/Client.js";
import { savAcc } from "./modules/SavingsAccount.js";
import { account } from "./modules/Accounts.js";
import { salaAcc } from "./modules/SalaryAccount.js";

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

const account1 = new checkAcc(

    client1, //client info
    1002, //agency
)

const account2 = new savAcc(

    client2,
    1002,
    50 //initial balance
)

const testSal = new salaAcc(client1);

//--------operations--------

testSal.deposit(100);
testSal.toWithdraw(10);

//--------printing checking accounts status--------

console.log('');

console.log(testSal);

console.log('');
