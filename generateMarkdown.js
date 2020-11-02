// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}/n
    ##Table of Contents
    *Description
    *Installation
    *Use
    *Contributions
    *Testing
`;


}

module.exports = generateMarkdown;
