const path = require('path')

module.exports = {
    ignore: [
        '**/App.js',
        '*/*/[A-Z]*.test.js',
        '*/*/[A-Z]*.spec.js',
        '**/GlobalStyle.js',
    ],
    defaultExample: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    components: 'src/components/**/[A-Z]*.js',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styles/StyleguideWrapper'),
    },
}
