const Mananger = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer= require('./lib/Engineer');
const inquirer= require('inquirer');
const Manager = require('./lib/Manager');
const employeeArray=[];
const promptManager=()=>{
inquirer.prompt([{
   type:'input',
   name: 'name',
   message: 'What is your name?'
},
{
    type:'input',
    name: 'id',
    message: 'Type in your id '
},
{
    type:'input',
    name: 'email',
    message:'Type in your email'
},
{
    type:'input',
    name: 'officenumber',
    message:'What is your office number?'
},
 
]).then(data=>{
 const newManager= new Manager(data.name,data.id,data.email,data.officenumber);
console.log(newManager);
});
}

