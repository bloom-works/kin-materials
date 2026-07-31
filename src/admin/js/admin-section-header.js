const sectionHeader = {
  id: "SectionHeader",
  label: "Section Header",
    pattern: /\{% SectionHeader "([^"]*)", "([^"]*)" %\}/,
    fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    {
      name: 'image',
      label: 'Background Image',
      widget: 'image',
      media_folder: "assets/images",
      public_folder: "images",
      allow_multiple: false,
    }
  ],
  fromBlock: function(match) {
    return {
      title: match[1],
      image: match[2]
    };
  },

  toBlock: function(data) {
    return '{' + `% SectionHeader "${data.title}", "${data.image}" %` + '}';
  },

  toPreview: function(data) {
    return `
      <div class="section-header" style="--image: url('${data.image}')">
        <h2>${data.title}</h2>
      </div>
    `;
  }
};

export default sectionHeader;