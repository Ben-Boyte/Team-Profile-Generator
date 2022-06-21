const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputDir = path.resolve("./dist/");
const outputPath = path.join(outputDir, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];


function runApp () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of members would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more members to add."]
    }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }
  
  function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the ID number of the manager?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email address of the manager?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the office number of the manager?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  
  }

  function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the ID number of the engineer?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email address of the engineer?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the GitHub username of the engineer?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

    }

  
    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?"
          },
    
          {
            type: "input",
            name: "internId",
            message: "What is the ID number of the intern?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the email address of the intern?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "Where does the intern attend school?"
          }
    
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          teamArray.push(intern);
          createTeam();
        });
    
      }
    
    function htmlBuilder () {
        console.log("Created Team Profile!")

        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }

    createTeam();
}

runApp();