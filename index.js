const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');
const util = require('util');

const HTML_TEMPLATE = '<!DOCTYPE html><head><style type="text/css">body{font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";}</style></head><body>%s</body></html>';

try {
  const markdownText = core.getInput('text');
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdownText);

  const finalOutput = util.format(HTML_TEMPLATE, html);
  
  core.setOutput("html", finalOutput);

} catch (error) {
  core.setFailed(error.message);
}
