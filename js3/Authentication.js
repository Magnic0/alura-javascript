//Authentication system for employees

export class authSystem{

    static login(employee, password){

        return employee._password == password;
    }
}
