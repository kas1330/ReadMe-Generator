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
const Choices = require('inquirer/lib/objects/choices');


      const questions = [
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
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['None','Apache License 2.0', 'Boost Software License 1.0', "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v2.1', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense' ]
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
        },
        {
        type: 'input',
        name: 'userName',
        message: "What's your GitHub user name?"
        }
        {
        type: 'input',
        name: 'email',
        message: "What's your email address?"
        }

];

inquirer.prompt(questions)
 
.then(function (data) {
  // var filename = data.name.toLowerCase().split(' ').join('') + '.json';


  console.log('Here is what you entered: ', data.title);
  const markdownData= generateMarkdown(data);
//   console.log('Its working', working);
  writeToFile('READMEdemo.md', markdownData);

});

  //Writes the file
function writeToFile(fileName, data) {
    console.log('in writefile');
      fs.writeFile(fileName, data, function(err) {
          if(err){
            return console.log('There was an error when trying to write the file.');
          }
          console.log('File successfully written.');
      } )
}

// function init() {

//     // const generateMD = generateMarkdown(data);
// }