// Iniciando o segundo dos cursos de Javascript: Programando a Orientação a Objetos.

class client{

    name;
    cpf;
    rg;
}

class checkAcc{

    agency;
    _balance = 0; //private attribute
    withdraw(value){

        if(value <= 0){ //verify if the withdraw value is positive

            return; //stops condition execution
        }
        this._balance -= value;
        return value;
    }
    deposit(value){

        if(value <= 0){ //verify if deposit value is positive

            return;
        }
        this._balance += value;
    }
}

const client1 = new client();
var checkAcc1 = new checkAcc();
client1.name = 'Richard';
client1.cpf = 19216810130;
client1.rg = 456987326;
checkAcc1.agency = 1001;

const client2 = new client();
var checkAcc2 = new checkAcc();
client2.name = 'Alice';
client2.cpf = 15645675450;
client2.rg = 330344780;
checkAcc2.agency = 1001;

checkAcc1.deposit(150);
const withdrawValue = checkAcc1.withdraw(50);
console.log('Withdraw Value: US$', withdrawValue);

console.log('\n', client1);
console.log('\n', checkAcc1);

console.log('\n', client2);
console.log('\n', checkAcc2);

console.log('');
