const getIcon = type => {
  switch (type) {
    case 'help':
      return 'question-circle';
      break;
    case 'pdf':
      return 'file-earmark-arrow-down';
      break;
    case "link":
      return 'box-arrow-up-right';
      break;
  } 
}

const download = {
  id: "download",
  label: "Download Link",
  fields: [
  	{
      name: 'link',
      label: 'URL',
      widget: 'string'
    },
    {
      name: 'contents',
      label: 'Link Text',
      widget: 'string'
    },
    {
    	name: 'type',
    	label: "Type of Link",
    	widget: 'select',
      default: "link",
    	options: [
      	{ label: 'PDF', value: 'pdf'},
      	{ label: 'External web page', value: 'link'},
      	{ label: "Help documentation", value: 'help'}
      ]
    }
  ],
  pattern: /\{%(-)? Download \"([a-z]+)\" (-)?%}\[(.+?)\]\((.+?)\)\{%(-)? endDownload (-)?%\}/,
  fromBlock: function(match) {
    return {
    	link: match[5],
      contents: match[4],
      type: match[2]
    };
  },
  toBlock: function(data) {
    return `{% Download "${data.type}" %}[${data.contents}](${data.link}){% endDownload %}`;
  },
  toPreview: function(data) {
    return `
<section class='download'>
<svg fill="currentColor">
<use xlink:href="../bootstrap-icons.svg#${getIcon(data.type)}"></use>
</svg>
<a href="${data.link}">${data.contents}</a>
</section>
`;
	}
};

export default download;