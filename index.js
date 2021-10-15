// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'q1',
            message: 'Github?',
        },
        {
            type: 'input',
            name: 'q2',
            message: 'Email?',
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Project name?',
        },
        {
            type: 'input',
            name: 'q4',
            message: 'Project description?',
        },
        {
            type: 'input',
            name: 'q5',
            message: 'What kind of license did you use?',
        },
        {
            type: 'input',
            name: 'q6',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'q7',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'q8',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'q9',
            message: 'What does the user need to know about contributing to the repo?',
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
    askQuestions()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));

};

// Function call to initialize app
init();





// Use writeFileSync method to use promises instead of a callback function

// const promptUser = (questions) => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: ,
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ]);
// };

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// // Bonus using writeFileSync as a promise
// const init = () => {
//   promptUser()
//   // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();