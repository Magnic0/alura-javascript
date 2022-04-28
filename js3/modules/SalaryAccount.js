//Salary Account Module

import { account } from "./Accounts.js";

export class salaAcc extends account{

    constructor(client){

        super(0, client, 100);

        this._client = client;
    }

    toWithdraw(value){

        let tax = 1.01;
        return super._toWithdraw(value, tax);
    }
}