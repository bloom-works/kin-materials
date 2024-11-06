const pluginTOC = require('eleventy-plugin-nesting-toc');
const markdownLibrary = require('./markdown');

const CalloutComponent = require('./src/_includes/components/Callout');
const ChecklistComponent = require('./src/_includes/components/Checklist');
const DefinitionComponent = require('./src/_includes/components/Definition');


module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2'],
    wrapper: 'div',
    wrapperClass: 'l-stack'
  });

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');

  // Customize Markdown library and settings:
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addPairedShortcode('Callout', CalloutComponent);
  eleventyConfig.addPairedShortcode('Checklist', ChecklistComponent);
  eleventyConfig.addPairedShortcode('Definition', DefinitionComponent);


  const md = require("markdown-it")({
    html: false,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
    md.render(markdownString),
  );

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid'
    ],

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
      output: '_site'
    }
  };
};
