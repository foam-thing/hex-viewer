// You do not need prettier

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // https://prettier.io/docs/en/options.html#print-width
    'max-len': ['off', { code: 120, tabWidth: 2, ignoreUrls: true }],
    // https://prettier.io/docs/en/options.html#tab-width
    // https://prettier.io/docs/en/options.html#tabs
    // https://prettier.io/docs/en/options.html#semicolons
    // https://prettier.io/docs/en/options.html#quotes
    // https://prettier.io/docs/en/options.html#quote-props
    // https://prettier.io/docs/en/options.html#jsx-quotes
    // https://prettier.io/docs/en/options.html#trailing-commas
    // https://prettier.io/docs/en/options.html#bracket-spacing
    // https://prettier.io/docs/en/options.html#bracket-line
    // https://prettier.io/docs/en/options.html#deprecated-jsx-brackets
    // https://prettier.io/docs/en/options.html#arrow-function-parentheses
    // https://prettier.io/docs/en/options.html#range
    // https://prettier.io/docs/en/options.html#parser
    // https://prettier.io/docs/en/options.html#file-path
    // https://prettier.io/docs/en/options.html#require-pragma
    // https://prettier.io/docs/en/options.html#insert-pragma
    // https://prettier.io/docs/en/options.html#prose-wrap
    // https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
    // https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
    // https://prettier.io/docs/en/options.html#end-of-line
    // https://prettier.io/docs/en/options.html#embedded-language-formatting
    // https://prettier.io/docs/en/options.html#single-attribute-per-line
  },
};
