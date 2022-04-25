// Client Data module

export class client{

    get cpf(){
        
        return this._cpf;
    }

    get rg(){

        return this._rg;
    }

    constructor(name, cpf, rg){

        this.name = name;
        this._cpf = cpf;
        this._rg = rg;
    }
}
