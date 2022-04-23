// Check Account archive

import { client } from "./Client.js";

export class checkAcc{

    static accountNum = 0;
    
    agency;

    _client;
    set client(newValue){

        if(newValue instanceof client){

            this._client = newValue;
        }
    }
    get client(){

        return this._client;
    }

    _balance = 0; //private attribute
    get balance(){

        return this._balance;
    }

    constructor(client, agency){

        this.client = client;
        this.agency = agency;
        checkAcc.accountNum += 1;
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
    }

    transfer(value, account){

        if(value > this._balance || value <= 0) { //verify if value transfered is negative or bigger than the balance

            return;
        }
        const withdrawValue = this.toWithdraw(value);
        account.deposit(withdrawValue);
    }
}
