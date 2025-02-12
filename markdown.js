const markdownIt = require('markdown-it');
const attrs = require('markdown-it-attrs');

const markdownLibrary = markdownIt({
  html: true,
  breaks: false,
  linkify: true
}).use(attrs);

module.exports = markdownLibrary;
