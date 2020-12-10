const Mananger = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const employeeArray = [];

const promptManager = () => {
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
        name: "phone",
        message: "What is your phone number?",
      },
    ])
    .then((data) => {
      const Managers = new Manager(data.name, data.id, data.email, data.phone);
      console.log(Managers);
    });
};
const promptEngineer = () => {
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
    ])
    .then((eng) => {
      const Engineers = new Engineer(eng.name, eng.id, eng.email, eng.github);
      console.log(Engineers);
    });
};
const promptIntern = () => {
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
    ])
    .then((inter) => {
      const Interns = new Intern(
        inter.name,
        inter.id,
        inter.email,
        inter.school
      );
      console.log(Interns);
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
          promptManager();
          break;
        case "Intern":
          promptIntern();
          break;
        case "Engineer":
          promptEngineer();
          break;
        default:
          return `must select something!`;
      }
    });
};
employeeTypePrompt();
