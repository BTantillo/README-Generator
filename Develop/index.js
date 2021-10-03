 // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// npm install inquirer

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project title? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true
                } else {
                    console.log('Please enter your project title!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to add a description about your project?',
            default: true 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide some information about your project:',
            when: ({ confirmDescription }) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'installInstruction',
            message: 'Is there any installation instructions you would like us to know about your project?',
            default: true 
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Provide the installation information about your project:',
            when: ({ installInstruction }) => {
                if (installInstruction) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'usageInformation',
            message: 'Is there any Usage Information you would like us to know about your project?',
            default: true, 
        },
        {
            type: 'input',
            name: 'information',
            message: 'Provide the Usage Information about your project:',
            when: ({ usageInformation }) => {
                if (usageInformation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributionGuidelines',
            message: 'Is there any Contribution Guidelines you would like us to know about your project?',
            default: true, 
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Provide the Contribution Guidelines about your project:',
            when: ({ contributionGuidelines }) => {
                if (contributionGuidelines) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'testInstructions',
            message: 'Are there any Test Instructions you would like us to know about your project?',
            default: true, 
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Provide the Test Instructions about your project:',
            when: ({ testInstructions }) => {
                if (testInstructions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox' ,
            name: 'license',
            message: 'What License did you use in this project? (Check the box that applys)',
            choices: ['MIT', 'APACHE', 'GNU', 'BSD3'],
         },


    ])
};



// TODO: Create a function to write README file
questions()
  .then((readmeData) => {
    console.log(readmeData);
    writeToFile("readme.md", generateMarkdown(readmeData));
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
  // TODO: Create a function to write README file
function writeToFile(filename, readmeData) {
    console.log(filename, readmeData);
    return fs.writeFileSync(path.join(process.cwd(), filename), readmeData);
}
