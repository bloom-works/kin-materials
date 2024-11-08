const { html } = require('common-tags');
const markdown = require('../../../markdown');

function renderIconListItemYes (content, icon, color = "#999") {
  const text = markdown.render(content);

  switch (icon) {
    case 'yes':
      icon = 'check-circle';
      color = 'var(--c-green-600)';
      break;
    case 'no':
      icon = 'x-circle';
      color = 'var(--c-orange-600)';
      break;
    case 'mail':
      icon = 'mailbox-flag';
      break;
    case 'online':
      icon = 'globe2';
      break;
    case 'direct-deposit':
      icon = 'bank';
      break;
    case 'phone':
      icon = 'telephone';
      break;
    case 'pen':
      icon = 'pen';
      break;
  }

  return html`
    <li>
      <svg style="fill: ${color};">
        <use xlink:href="../bootstrap-icons.svg#${icon}"></use>
      </svg>
      ${text}
    </li>  
  `
}

module.exports = renderIconListItemYes;
