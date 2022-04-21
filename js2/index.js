// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

//--------referencing all modules--------

import { checkAcc } from "./modules/CheckAccount.js";
import { client } from "./modules/Client.js";

//--------configuring checking accounts accounts--------

const client1 = new client();
client1.name = "Richard";
client1.cpf = 19216810130;
client1.rg = 456987326;

var checkAcc1 = new checkAcc();
checkAcc1.agency = 1001;
checkAcc1.client = client1;

const client2 = new client();
client2.name = 'Alice';
client2.cpf = 15645675450;
client2.rg = 330344780;

var checkAcc2 = new checkAcc();
checkAcc2.agency = 1001;
checkAcc2.client = client2;

//--------operations--------

checkAcc1.deposit(3000);
checkAcc1.transfer((275), checkAcc2);
//const withdrawValue = checkAcc1.toWithdraw(50);
//console.log('Withdraw Value: US$', toWithdrawValue);

//--------printing checking accounts status--------

console.log('\n', checkAcc1);

console.log('\n', checkAcc2);

console.log('');
