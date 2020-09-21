function generateMarkdown(data) {
    return `# ${data.title}
    
  ## Developer:
  ${data.developer}

  ## Description
  ${data.description}

  ## Table
  ${data.table}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Questions
  ${data.questions}
  ${data.email}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Test
  ${data.test}

  ## Github
  ${data.Github}
`;
  }
  
  module.exports = generateMarkdown;
  