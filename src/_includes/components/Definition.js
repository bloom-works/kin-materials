const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderDefinition (content, term) {
  const text = markdown.render(content);

  return html`
    <div>
      <dt>${term}</dt>
      <dd class="l-stack">${text}</dd>
    </div>
  `
}

module.exports = renderDefinition;
