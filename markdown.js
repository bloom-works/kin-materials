const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const attrs = require('markdown-it-attrs');

const markdownLibrary = markdownIt({
  html: true,
  breaks: false,
  linkify: true
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
}).use(attrs);

module.exports = markdownLibrary;
