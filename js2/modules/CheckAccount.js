// Check Account archive

export class checkAcc{

    agency;
    client;
    _balance = 0; //private attribute
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
