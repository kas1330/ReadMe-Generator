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
    *Installation
    *Use
    *Contributions
    *Testing
`;


}

module.exports = generateMarkdown;
