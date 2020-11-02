/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/


var inquirer = require('inquirer');

var fs = require('fs');
var util = require('util');
var axi = require('axios');
const generateMarkdown = require('./generateMarkdown');

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

inquirer
  .prompt([
      // const questions = [

// ];
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description for your project.'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Describe the installation process.'
    },
    {
    type: 'input',
    name: 'use',
    message: 'How is your project used?'
    },
    {
    type: 'input',
    name: 'contribute',
    message: 'How can someone contribute to your project?'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Explain your testing procedures.'
    }
    
  ])
  .then(function (data) {
    // var filename = data.name.toLowerCase().split(' ').join('') + '.json';

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
    //   if (err) {
    //     return console.log(err);
    //   

    //   console.log('Success!');
    // });
    console.log('Here is what you entered: ', data.title);
    generateMarkdown(data);
    generateMarkdown();

  });
