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
    getRole(){
        return `Intern`
    }

}
// const newIntern= new Intern('Zeeky','12444','###-####-#####', '###@@@.com');
// console.log(newIntern);
// // console.log(newManager.getRole());

module.exports= Intern;