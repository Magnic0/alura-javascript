//Savings Account Module

import { account } from "./Accounts.js";

export class savAcc extends account{

    static _savingsAccountNum = 0;
    static get savingsAccountNum(){

        return savAcc._savingsAccountNum;
    }
    static set savingsAccountNum(count){

        savingsAcc._savingsAccountNum = count;
    }
    
    constructor(client, agency, initBalance){

        super(client, agency, initBalance);

        this._client = client;
        this._agency = agency;
        this._balance = initBalance;
        savAcc._savAccountNum += 1;
    }

    toWithdraw(value){

        let tax = 1.02;
        return super._toWithdraw(value, tax);
    }
}
