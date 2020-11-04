// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const userData= data;
  return `
  # ${userData.title} 
  \n## Description
  \n ${userData.description}
  \n## Table of Contents
\n\n- [Installation](##Installation)
\n\n- [Usage](##Usage)
\n\n- [License](##License)
\n\n- [Contributions](##Contributions)
\n\n- [Testing](##Testing)
\n\n- [Questions](##Questions)
\n## Installation
\n ${userData.install}
\n## Usage
\n ${userData.use}
\n## License
\n ${userData.license}
\n## Contribute
\n ${userData.contribute}
\n## Tests
\n ${userData.tests}
\n## Questions
\n ${userData.userName}
\n ${userData.email}









`;


}

module.exports = generateMarkdown;
