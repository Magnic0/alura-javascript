class Client{

    name;
    cpf;
    agency;
    balance;
}

var client1 = new Client();
var client2 = new Client();

client1.name = 'Richard';
client1.cpf = 19216810130;
client1.agency = 1001;
client1.balance = 0;

client2.name = 'Alice';
client2.cpf = 15645675450;
client2.agency = 1001;
client2.balance = 0;

console.log('\n', client1, '\n\n', client2, '\n');