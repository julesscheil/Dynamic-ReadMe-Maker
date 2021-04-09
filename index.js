// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'githubUser',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a short description of your project: ',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "None"]
    },
    {
        type: 'input',
        message: 'What command should be ran to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be ran to run tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];


// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMeContent = generateMarkdown(answers);
            console.log('Generating ReadMe...');
            fs.writeFile('DynamicReadMe.md', readMeContent, (err) =>
                err ? console.error(err) : console.log("success"))
        });

}

// Function call to initialize app
init();