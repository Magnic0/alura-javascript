export class account{

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
    constructor(client, agency, initBalance){

        this._client = client;
        this._agency = agency;
        this._balance = initBalance;
    }
    toWithdraw(value){

        if(value <= 0){ //verify if the withdraw value is positive

            return; //stops condition execution
        }
        this._balance -= value;
        return value;
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