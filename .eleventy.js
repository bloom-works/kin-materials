const yaml = require('js-yaml');

const pluginTOC = require('eleventy-plugin-nesting-toc');
const markdownLibrary = require('./markdown');

const CalloutComponent = require('./src/_includes/components/Callout');
const DefinitionComponent = require('./src/_includes/components/Definition');
const DirectoryButtonComponent = require('./src/_includes/components/DirectoryButton');
const DownloadComponent = require('./src/_includes/components/Download');
const IconListItemComponent = require('./src/_includes/components/IconListItem');
const LawLinkComponent = require('./src/_includes/components/LawLink');


module.exports = function (eleventyConfig) {

  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Add plugins
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2'],
    wrapper: 'div',
    wrapperClass: 'l-stack'
  });

 eleventyConfig.setTemplateFormats("html,liquid,md,njk");


  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('src/admin');

  // Customize Markdown library and settings:
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addPairedShortcode('Callout', CalloutComponent);
  eleventyConfig.addPairedShortcode('Definition', DefinitionComponent);
  eleventyConfig.addPairedShortcode('DirectoryButton', DirectoryButtonComponent);
  eleventyConfig.addPairedShortcode('Download', DownloadComponent);
  eleventyConfig.addPairedShortcode('IconListItem', IconListItemComponent);
  eleventyConfig.addShortcode('LawLink', LawLinkComponent);

  const md = require("markdown-it")({
    html: false,
    breaks: false,
    linkify: true,
  });

  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
    md.render(markdownString),
  );

  return {

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use '' or '/' (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: '/',
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    }
  };
};
