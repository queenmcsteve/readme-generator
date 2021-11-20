// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU GPLv3") {
    return "![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0.html)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This project is licensed under the terms of the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description:
${data.description}

## Table of contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

# Installation Instructions
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contribute}

# Tests
${data.tests}

# Contact
If you have any questions you can reach me via:
- Github: [${data.gituser}](https://github.com/${data.gituser})
- Email: [${data.email}](mailto:${data.email})

# License
[${renderLicenseSection(data.license)}]${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
