//Child class Director

import { employee } from "./Employee.js";

export class director extends employee{

    constructor(name, cpf, salary){

        super(name, cpf, salary);

        this._bonus = 2;
    }
}
