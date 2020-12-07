const Employee= require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    
    getRole(){
     return `Managerdn`;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    // methods

}
const newManager= new Manager('dk','kk','kkk@gmail.com','54654654');
//console.log(newManager);
// console.log(newManager.getRole());

module.exports= Manager;
