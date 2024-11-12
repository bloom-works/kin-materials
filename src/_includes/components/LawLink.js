const { html } = require('common-tags');
const markdown = require('../../../markdown-no-line-breaks');

function renderLawLink (content) {
  const text = markdown.renderInline(content);

  return`
    <span class="law-link">Refer to ${content}</span>
  `
}

module.exports = renderLawLink;
