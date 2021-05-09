const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// const generateMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = (response) =>
`# ${response.title}
## Table of Contents\n
- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [License](#license)\n
- [Contributing](#contributing)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Description\n
${response.description}\n
## Installation\n
${response.installation}\n
## Usage\n
${response.usage}\n
## License\n
${response.license}\n
## Contributing\n
${response.contributing}\n
## Tests\n
${response.tests}\n
## Questions\n
If you have any questions, contact me at ${response.email}. You can also find more of my work on GitHub at https://github.com/${response.github}.
`


const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project/application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of your README?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How exactly is your project used?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide the license of your project.',
        choices: ['MIT', 'Apache 2.0', 'GNU', 'BSD3', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include a way for others to be able to contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include tests for your project and provide examples on how to run them.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please include your email.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please include your GitHub username.'
    }
])};
// .then((resonse) => {
//     console.log(response);

//     fs.writeFile('NEWREADME.md', generateMarkdown(response), 
//     (err) => err ? console.error(err) : console.log('Success!'));
// });
function init() {
    promptUser()
        .then((response) => writeFileAsync('README2.md', generateMarkdown(response)))
        .then(() => console.log('Successfully created a NEWREADME.md'))
        .catch((err) => console.error(err));
};

init();