// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var varName = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  return varName
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Me
  ![Github license]()
  ${varName}
  
  ## Description
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  ## Usage
  
  ## License
  
  ## Contributing
  
  ## Tests
  
  ## Questions`;

//   return `# ${data.title}


//   ${varName}

// `;
}

module.exports = generateMarkdown(data);
