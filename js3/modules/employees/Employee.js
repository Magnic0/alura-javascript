//Main class

export class employee{

    constructor(){

        this._name;
        this._cpf;
        this._salary;

        this._bonus = 1;
        this._password;
    }

    get senha(){

        return this._senha;
    }

    register(password){

        this._password = password;
    }
}
