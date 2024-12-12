const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const classy = require('markdown-it-classy');

const markdownLibrary = markdownIt({
  html: true,
  breaks: false,
  linkify: true
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
}).use(classy);

module.exports = markdownLibrary;
