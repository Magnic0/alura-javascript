// Checking Account module

import { client } from "./Client.js";

export class checkAcc{

    static _accountNum = 0;
    static get accountNum(){

        return checkAcc._accountNum;
    }
    static set accountNum(count){

        checkAcc._accountNum = count;
    }
    set client(newValue){

        if(newValue instanceof client){

            this._client = newValue;
        }
    }
    get client(){

        return this._client;
    }
    get balance(){

        return this._balance;
    }
    constructor(client, agency){

        this._client = client;
        this._agency = agency;
        this._balance = 0;
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
