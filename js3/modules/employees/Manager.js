//Child class Manager

import { employee } from "./Employee.js";

export class manager extends employee{

    constructor(name, cpf, salary){

        super(name, cpf, salary);

        this._bonus = 1.1;
    }
}
