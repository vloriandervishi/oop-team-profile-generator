const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const webPage = require("./src/page-template");
const webTemplate = require("./src/startpage");
const { writeFile, copyFile } = require("./src/createFile");

const managerArray = [];
const internArray = [];
const engineerArray = [];

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
        name: "phone",
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
      managerArray.push(webPage(data,supervisor));
      const ma = managerArray.map((it) => {
        // console.log(it); works
        return it;
      });
      writeFile(webTemplate(ma.join("")));

      // console.log(webTemplate( webPage(ma.join(""))));
      //console.log(managerArray.join("")); /// displayes added section into array
      if (data.addTeamMember) {
        return employeeTypePrompt();
      } else {
        return supervisor;
      }
    });
};
const promptEngineer = (engine) => {
  inquirer
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
      engineerArray.push(webPage(eng,engine));
      const ea = engineerArray.map((it) => {
        console.log(it);
        return it;
      });
      
      
      webTemplate(ea.join(""));
      
      if (eng.addTeamMember) {
        return employeeTypePrompt();
      } else {
        return engine;
      }
    });
};
const promptIntern = (associate) => {
  inquirer
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
      
      internArray.push(webPage(inter,associate));
      const ia= internArray.map(i=>{
       return i;
      });
      webTemplate(ia.join(""));
      if (inter.addTeamMember) {
        return employeeTypePrompt();
      } else {
        return associate;
      }
    });
};

const employeeTypePrompt = () => {
  inquirer
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
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
employeeTypePrompt();
