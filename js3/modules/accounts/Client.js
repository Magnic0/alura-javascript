// Client Data module

import { employee } from "../employees/Employee.js";

export class client extends employee{

    get cpf(){
        
        return this._cpf;
    }

    get rg(){

        return this._rg;
    }

    constructor(name, cpf, rg, password){

        super(name, cpf, rg, password);

        this.name = name;
        this._cpf = cpf;
        this._rg = rg;
        this._password = password;
    }
}
