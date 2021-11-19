// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title: ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter your project description: ",
    name: "description",
  },
  {
    type: "input",
    message: "Enter any installation instructions: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter any usage information: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter any contribution guidelines: ",
    name: "contribute",
  },
  {
    type: "input",
    message: "Enter any test instructions: ",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license: ",
    choices: ["MIT", "GNU GPLv3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "gituser",
  },
  {
    type: "input",
    message: "Enter your email address: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./output/${fileName}.md`, data, (err) => {
    if (err) {
      console.log(err);
      return console.log(err);
    }
    console.log("Your readme file has been created.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    writeToFile(`README`, generateMarkdown(data));
  });
}

// Function call to initialize app
init();
