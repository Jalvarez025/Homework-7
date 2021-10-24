// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
   if(data.license == "MIT"){
    return link = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else{
    return link = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // if(license == 'MIT'){
//   //   renderLicenseBadge(license);
//   // }
  
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

//   return
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}
  
  ${renderLicenseBadge(data)}

  ${data.github}
  
  
  
  
 
  
  
 

  ## Description
  ${data.description}
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  ${data.command}
  ## Usage
  ${data.info}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  # Please email me if you have any questions ${data.email}`
}

module.exports = generateMarkdown;
