function generateMarkdown(data) {
    return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blueviolet.svg)
  [Custom foo description](#foo)

  ## Developer:
  ${data.developer}

  ## Description
  ${data.description}

  ## Table
  * [Installation](##Installation)
  * [Usage](##Usage)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Questions
  ${data.questions}
  ${data.email}
  ${data.Github}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Test
  ${data.test}

  ## Github
  ${data.Github}

  # Foo
`;
  }
  
  module.exports = generateMarkdown;
  