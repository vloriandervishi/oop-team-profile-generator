const Employee= require('./Employee.js');

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }
    
    getRole(){
     return `Engineer`;
    }
    getGithub(){
        return this.github;
    }
    // methods

}
// const newEngineer= new Engineer('Zeeky','12444','###-####-#####', '###@@@.com');
// console.log(newEngineer);
// console.log(newManager.getRole());

module.exports= Engineer;