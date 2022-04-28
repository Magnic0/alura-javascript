// Checking Account module

import { account } from "./Accounts.js";

export class checkAcc extends account{

    static _checkAccountNum = 0;
    static get checkAccountNum(){

        return checkAcc._checkAccountNum;
    }
    static set checkAccountNum(count){

        checkAcc._checkAccountNum = count;
    }
    
    constructor(client, agency){

        super(client, agency, 0);

        this._client = client;
        this._agency = agency;
        checkAcc.checkAccountNum += 1;
    }

    toWithdraw(value){

        let tax = 1.1;
        return super._toWithdraw(value, tax);
    }
}
