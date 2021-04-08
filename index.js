// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const readMeContent = (answers) => 
    `# User Project Title

    ## Description
    
    ## Table of Contents
    * [Installation]
    
    * [Usage]
    
    * [License]
    
    * [Contributing]
    
    * [Tests]
    
    * [Questions]

    ## Installation
    
    ## Usage
    
    ## License
    
    ## Contributing
    
    ## Tests
    
    ## Questions`


inquirer
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'usersName',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Please paste link to GitHub:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please paste link to LinkedIn:',
            name: 'linkedin',
        },
    ])
    .then((answers) => {
        const createHTML = readMeContent(answers);
        fs.writeFile('index.html', createHTML, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    });