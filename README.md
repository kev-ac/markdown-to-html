# Markdown to HTML action

This action prints converts a Markdown input to an HTML

## Inputs

### `text`

**Required** The markdown text you want to convert

### `wrap_html`

Wrap the generated HTML in some basic syntax (doctype, system fonts).
See [index.js](/blob/master/index.js) for more details.

Default: false

## Outputs

### `html`

The HTML result

## Example usage

```
uses: kev-ac/markdown-to-html@v1.3.1
with:
  text: 'Hello there'
  wrap_html: true
```
