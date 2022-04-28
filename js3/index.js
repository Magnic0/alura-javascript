// Starting the 3rd and last JavaScript basic courses of Alura.com.br

/* //--------referencing all account modules--------

import { checkAcc } from "./modules/accounts/CheckAccount.js";
import { client } from "./modules/accounts/Client.js";
import { savAcc } from "./modules/accounts/SavingsAccount.js";
import { salaAcc } from "./modules/accounts/SalaryAccount.js";

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

console.log(''); */

//--------------------//--------------------//

//-----referencing employee modules-----//

import {client} from "./modules/accounts/Client.js"
import { director } from "./modules/employees/Director.js"
import { manager } from "./modules/employees/Manager.js"
import { authSystem } from "./Authentication.js";

const client1 = new client("Porter", 12313312365, "321");
const director1 = new director("Carrie", 19746545618, 10000);

client1.register("321");
director1.register("1234");

const isDirLogged = authSystem.login(director1, "1234");
const isClientLogged = authSystem.login(client1, "321");

if(isDirLogged){

    console.log("\nWelcome director!\n");
} else {

    console.log("\nDirector isn't logged.\n");
}

console.log('--------------//--------------');

if(isClientLogged){

    console.log("\nWelcome client!\n");
} else {

    console.log("\nClient isn't logged.\n");
}
