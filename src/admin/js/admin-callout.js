import markdownIt from 'https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm';
const md = markdownIt();


const getMeta = data => {
  if (data.name) {
    return { icon: 'info-circle', name: "hello" };
  } else {
    switch (data.type) {
      case 'apply':
        return { icon: 'pen', name: 'How to apply'};
        break;
      case 'warning':
        return { icon: 'exclamation-circle', name: 'Warning' };
        break;
      case 'note':
        return { icon: 'info-circle', name: 'Note' };
        break;
      case 'related':
        return { icon: 'file-text', name: 'Related content' };
        break;
    } 
  }
}

const nameComma = name => `, "${name}"`;

const callout = {
  id: "callout",
  label: "Callout",
  fields: [
    {
      name: 'contents',
      label: 'Contents',
      widget: 'markdown',
      minimal: true
    },
    {
      name: 'type',
      label: 'Type',
      widget: 'select',
      default: { label: 'Note', value: 'note'},
      options: [
      	{ label: 'How to apply', value: 'apply'},
      	{ label: 'Note', value: 'note'},
      	{ label: "Warning", value: 'warning'}
      ]
    },
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      default: 'Note',
      required: false
    }
  ],
  pattern: /^\{%(-)? Callout \"([a-z]+)\"(?:, "(.+[a-z]+)\")? (-)?%}(.+?)\{%(-)? endCallout (-)?%\}/,
  fromBlock: function(match) {
    return {
      contents: match[5],
      type: match[2],
      name: match[3]
    };
  },
  toBlock: function(data) {
    return `{% Callout "${data.type}"${nameComma(data.name)} %}${data.contents}{% endCallout %}`;
  },
  toPreview: function(data) {
    return `
<section class='callout' data-type='${data.type}'>
<header>
<svg title='${data.name || getMeta(data)["name"]}' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
<use xlink:href='../bootstrap-icons.svg#${getMeta(data).icon}'></use>
</svg>
<span>${data.name || getMeta(data)["name"]}</span>
</header>
<div class='callout-inner'>${md.render(data.contents)}</div>
</section>
`;
  }
};

export default callout;