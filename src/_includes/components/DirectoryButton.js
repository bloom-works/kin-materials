const { html, stripIndents } = require('common-tags');

function renderDirectoryButton (title) {
  let output = html`
    <a href="#" class="directory-button">${title}</a>
  `
  
  return `${output}`.replace((/  |\r\n|\n|\r/gm),"");
}

module.exports = renderDirectoryButton;
