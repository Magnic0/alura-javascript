// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

class client{

    name;
    cpf;
    rg;
}

class checkAcc{

    agency;
    balance;
    withdraw(value){

        if(this.balance >= value){

            this.balance -= value;
        }
    }
}

const client1 = new client();
var checkAcc1 = new checkAcc();
client1.name = 'Richard';
client1.cpf = 19216810130;
client1.rg = 456987326;
checkAcc1.agency = 1001;
checkAcc1.balance = 0;

const client2 = new client();
var checkAcc2 = new client();
client2.name = 'Alice';
client2.cpf = 15645675450;
client2.rg = 330344780;
checkAcc2.agency = 1001;
checkAcc2.balance = 0;

console.log('\n', client1, '\n\n', client2, '\n');
console.log(`Richard's Balance: C$${checkAcc1.balance}\n`);
checkAcc1.balance += 100;
console.log(`Richard's Balance: C$${checkAcc1.balance}\n`);
checkAcc1.withdraw(50);
console.log(`Richard's Balance: C$${checkAcc1.balance}\n`);