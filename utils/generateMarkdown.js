function generateMarkdown(data) {
  return `# Title
  ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blueviolet.svg)

  ## Developer:
  ${data.developer}

  ## Description
  ${data.description}

  ## Table
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [Questions](##Questions)
  * [Contributing](##Contributing)
  * [License](##License)
  * [Test](##Test)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Questions
  If you have any questions contact me at:

  ${data.email}
  
  *[Github Username]
  ${data.Github}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
