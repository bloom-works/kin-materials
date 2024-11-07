const markdownIt = require('markdown-it');

const markdownLibrary = markdownIt({
  breaks: false,
});

module.exports = markdownLibrary;
