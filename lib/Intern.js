const Employee= require('./Employee.js');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
    
    getRole(){
     return `Intern`;
    }
    getSchool(){
        return this.school;
    }
    // methods

}
// const newManager= new Manager('Zeeky','12444','###-####-#####', '###@@@.com');
// console.log(newManager);
// console.log(newManager.getRole());

module.exports= Intern;