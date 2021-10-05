// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE"){
    return ""
  } else {
    return `![license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
  }
  
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (readmeData) => {
  return `
  ## ${readmeData.title}

  ### Created by: ${readmeData.name}
  <a href="https://github.com/${readmeData.name}">Github: ${readmeData.name} </a>

  ## Table Of Contents
  
  *[Project Description](#project-description)
  *[License Information](#license-information)
  *[Installion Instructions](#installion-instruction)
  *[Usage Information](#usage-information)
  *[Project Contribution](#project-contributions)
  *[Testing Instructions](#testing-instructions)
  *[Contact](#contact)
  

  ## Project Description
  ${readmeData.description}

  ## License Information
  ${renderLicenseBadge(readmeData.license)}

  ## Installion Instructions
  ${readmeData.instructions}

  ## Usage Information
  ${readmeData.information}

  ## Project Contributions
  ${readmeData.guidelines}

  ## Testing Instructions
  ${readmeData.testing}

  ## Contact 
  ${readmeData.email}

 `;
}

module.exports = {generateMarkdown};
