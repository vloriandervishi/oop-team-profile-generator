  
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const {addManager,addEngineer,addIntern} = require("./src/page-template");
const webTemplate = require("./src/startpage");
const { writeFile, copyFile } = require("./src/createFile");

const employeeArray = [];


const promptManager = (supervisor) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Type in your id ",
      },
      {
        type: "input",
        name: "email",
        message: "Type in your email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your phone number?",
      },
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to enter another team member? ",
        default: false,
      }
    ])
    .then((data) => {
      const manaGer= new Manager(data.name,data.id,data.email,data.officeNumber)
     employeeArray.push(addManager(manaGer));
     console.log(employeeArray.join(""));
     
     // writeFile(webTemplate(ma.join("")));

      // console.log(webTemplate( webPage(ma.join(""))));
      //console.log(managerArray.join("")); /// displayes added section into array
      if (data.addTeamMember) {
        return employeeTypePrompt();
      } else {
       
      }
    });
};
const promptEngineer = (engine) => {
return   inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Type in your id ",
      },
      {
        type: "input",
        name: "email",
        message: "Type in your email",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github account?",
      },
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to enter another team member? ",
        default: false,
      }
    ])
    .then((eng) => {
      const newEngineer= new Engineer(eng.name,eng.id,eng.email,eng.github);
      employeeArray.push(addEngineer(newEngineer));
     
     // writeFile (webTemplate(ea.join("")));
     
      
      if (eng.addTeamMember) {
        return employeeTypePrompt();
      } 
    });
};
const promptIntern = (associate) => {
 return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Type in your id ",
      },
      {
        type: "input",
        name: "email",
        message: "Type in your email",
      },
      {
        type: "input",
        name: "school",
        message: "What school did you attend?",
      },
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to enter another team member? ",
        default: false,
      }
    ])
    .then((inter) => {
      const newIntern= new Intern(inter.name,inter.id,inter.email,inter.school)
      employeeArray.push(addIntern(newIntern));
     
      
      writeFile(webTemplate(employeeArray));
      if (inter.addTeamMember) {
        return employeeTypePrompt();
      } 
    });
};

const employeeTypePrompt = () => {
 return  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "What is you role in this job?",
        choices: ["Manager", "Intern", "Engineer"],
      },
    ])
    .then((data) => {
      //console.log(data + 'data'); // undefined

      // console.log(data.choices+ 'data.choices');// undefined
      switch (data.title) {
        case "Manager":
          promptManager(data.title);
          break;
        case "Intern":
          promptIntern(data.title);
          break;
        case "Engineer":
          promptEngineer(data.title);
          break;
        default:
          return `must select something!`;
      }
    });
};


employeeTypePrompt();