const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?:"
    },
    {
        type: "input",
        name: "developer",
        message: "What is your name?:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide information on how to project was made and designed:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instruction/example on how to use your application:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide any and all collaborators if applicable:"
    },
    {
        type: "list",
        choices: ["MIT", "Apache"],
        name: "license",
        message: "What license would you like to use:"
    },
    {
        type: "input",
        name: "test",
        message: "Provide explanation of how your test runs:"
    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?:"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?:"
    }
];

inquirer
    .prompt(questions)
    .then(function(data){
        fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
            throw err;
        };

        console.log("New README file created with success!");
        });
    });

function init() {

}

init();
