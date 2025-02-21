const iconList = {
 	label: 'Contact methods',
	id: 'contactMethods',
	widget: 'list',
	min: 2,
	label_singular: "contact method",
	fields: [
	    {
	    	name: "type",
	    	label: 'Type',
	    	widget: 'select',
	    	options: [
	    		{ label: 'bank', value: 'file-earmark-arrow-down'},
	  { label: 'mail', value: 'box-arrow-up-right'},
	  { label: "online", value: 'question-circle'},
	  { label: "phone", value: 'question-circle'},
	  { label: "pen", value: 'question-circle'},
	  { label: "yes", value: 'question-circle'},
	  { label: "no", value: 'question-circle'}
	    	]
	    },
	    {
	    	name: "text",
	    	label: "Contents",
	    	widget: 'markdown',
	    	minimal: true
	    }
	  ],
 	pattern: /^<ul class="icon-list">(\r\n|\r|\n)(.*?)<\/ul>$/ms,
  fromBlock: function(match) {
    return {
    	contactMethods: match[2]
    };
  },
  toBlock: function(data) {
    return `
<ul class="icon-list">
${data.contactMethods}
</ul>
    `;
  },
  toPreview: function(data) {
    return `
<ul class="icon-list">
${data.contactMethods}
</ul>
`;
  }
};

export default iconList;