const Employee= require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    
    getRole(){
     return `Manager`;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    // methods

}
const newManager= new Manager('Zeeky','12444','###-####-#####', '###@@@.com');
// console.log(newManager);
// console.log(newManager.getRole());

module.exports= Manager;
