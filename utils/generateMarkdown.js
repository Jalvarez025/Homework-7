// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
   if(data.license == 'MIT'){
    return link = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else{
    return link = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if(license == 'MIT'){
  //   renderLicenseBadge(license);
  // }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(github);
  renderLicenseBadge(data.license);

  return `# Me
  
  ${link}

  ${data.github}
  ${data.email}
  ${data.fileName}
  ${data.description}
  ${data.license}
  ${data.command}
  ${data.tests}
  ${data.info}
  ${data.contributing}

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

module.exports = generateMarkdown;
