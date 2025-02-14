const { html, stripIndents } = require('common-tags');

function renderDirectoryButton (title, link) {
  let output = html`
    <a href="${link || "#"}" class="directory-button">${title}</a>
  `
  
  return `${output}`.replace((/  |\r\n|\n|\r/gm),"");
}

module.exports = renderDirectoryButton;
