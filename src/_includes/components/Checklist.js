const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderChecklist (content, type) {
  const text = markdown.render(content);

  return html`
    <section class='checklist'>${text}</section>
  `
}

module.exports = renderChecklist;
