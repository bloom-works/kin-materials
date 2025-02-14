const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderDownload (content, type = "link") {
  const text = markdown.render(content);

  let icon = '';

  switch (type) {
    case 'link':
      icon = 'box-arrow-up-right';
      break;
    case 'pdf':
      icon = 'file-earmark-arrow-down';
      break;
    case 'word':
      icon = 'file-earmark-word';
      break;
    case 'help':
      icon = 'question-circle';
      break;
  }

  return html`
    <section class='download'>
        <svg fill="currentColor">
          <use xlink:href="../bootstrap-icons.svg#${icon}"></use>
        </svg>
        ${text}
    </section>
  `
}

module.exports = renderDownload;
