//Account module

export class account{

    constructor(client, agency, initBalance){

        if(this.constructor == account){

            throw new Error("\nYou shouldn't create a new object based on this abstract class!");
        }

        this._client = client;
        this._agency = agency;
        this._balance = initBalance;
    }

    get client(){

        return this._client;
    }

    set client(newValue){

        if(newValue instanceof client){

            this._client = newValue;
        }
    }

    get balance(){

        return this._balance;
    }

    get agency(){

        return this._agency;
    }

    toWithdraw(value){ //abstract method

        throw new Error('You are trying to call a abstract method! Instead, try calling from a child class.');
    }

    _toWithdraw(value, tax){

        let withdrawValue = value * tax;
        
        if(withdrawValue > this.balance){ //verify if the withdraw value is valid

            console.log('\nInsuficient Balance.\n');
        } else {

            this._balance -= withdrawValue.toFixed(2);
            return withdrawValue;
        }
    }

    deposit(value){

        if(value <= 0){ //verify if deposit value is negative

            return;
        }
        this._balance += value;
        return value;
    }

    transfer(value, account){

        if(value > this._balance || value <= 0) { //verify if value transfered is negative or bigger than the balance

            return;
        }
        const withdrawValue = this.toWithdraw(value);
        account.deposit(withdrawValue);
        return value;
    }
}