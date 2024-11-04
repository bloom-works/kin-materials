const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderDefinition (content, term) {
  const text = markdown.render(content);

  return html`
    <div>
      <dt>${term}</dt>
      <dd>
        <div class="l-stack-basic">${text}</div></dd>
    </div>
  `
}

module.exports = renderDefinition;
