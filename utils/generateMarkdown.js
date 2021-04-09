// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    return license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

  ## Installation
  To install dependencies, run this: 
  '''
  ${data.installation}
  '''
  ## Usage
  ${data.usage}
  ## License
  This project is licensed with ${data.license}
  ## Contributing
  ${data.contributions}
  ## Tests
 To run a test type this command 
  '''
 ${data.test}
  '''
 
  ## Questions
  For question, you can reach me at ${data.email} or my github @${data.githubUser}
`;
}

module.exports = generateMarkdown;