# Markdown to HTML action

This action prints converts a Markdown input to an HTML

## Inputs

### `text`

**Required** The markdown text you want to convert

### `wrap_html`

Wrap the generated HTML in some basic syntax (doctype, system fonts).

Default: false

## Outputs

### `html`

The HTML result

## Example usage

uses: lifepal/markdown-to-html@v1.1
with:
  text: 'Hello there'
