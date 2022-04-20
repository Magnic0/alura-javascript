// Check Account archive

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