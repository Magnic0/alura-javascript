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
var checkAcc1 = new checkAcc(
    
    client1, //client data
    1001 //client agency
)

const client2 = new client(
    
    'Alice',
    15645675450,
    330344780
)
var checkAcc2 = new checkAcc(
    
    client2,
    1001
)

//--------operations--------

checkAcc1.deposit(3000);
checkAcc1.transfer((275), checkAcc2);
//const withdrawValue = checkAcc1.toWithdraw(50);
//console.log('Withdraw Value: US$', toWithdrawValue);

//--------printing checking accounts status--------

console.log('\n', checkAcc1);

console.log('\n', checkAcc2);

console.log('');
