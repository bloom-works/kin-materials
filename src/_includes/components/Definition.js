const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderDefinition (content, term) {
  const text = markdown.render(content);

  return html`
    <div>
      <dt>${term}</dt>
      <dd>${text}</dd>
    </div>
  `
}

module.exports = renderDefinition;
