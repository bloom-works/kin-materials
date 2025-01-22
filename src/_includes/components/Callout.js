const { html, stripIndents } = require('common-tags');
const markdown = require('../../../markdown');

function renderCallout (content, type = 'note', title) {
  const text = markdown.render(content);

  let icon = '';

  switch (type) {
    case 'event':
      icon = 'calendar-week';
      break;
    case 'related':
      icon = 'file-text';
      if (!title) {
        title = 'Related content';
      }
      break;
    case 'apply':
      icon = 'pen';
      if (!title) {
        title = 'How to apply';
      }
      break;
    case 'warning':
      icon = 'exclamation-circle';
      if (!title) {
        title = 'Warning';
      }
      break;
    case 'note':
      icon = 'info-circle';
      if (!title) {
        title = 'Note';
      }
  }

  let output = html`
    <section class='callout' data-type='${type || 'info'}'>
      <header>
          <svg title='${title}' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
            <use xlink:href='/bootstrap-icons.svg#${icon}'></use>
          </svg>
          <span>${title}</span>
      </header>
      <div class='callout-inner'>${text}</div>
    </section>
  `
  
  return `${output}`.replace((/  |\r\n|\n|\r/gm),"");
}


module.exports = renderCallout;
