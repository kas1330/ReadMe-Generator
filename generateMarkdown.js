// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const userData= data;
  return `
  # ${userData.title}/n
    ##Table of Contents
    *Description
    *Installation
    *Use
    *Contributions
    *Testing
`;


}

module.exports = generateMarkdown;
