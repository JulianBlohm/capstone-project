module.exports = {
  ignore: ['**/App.js','*/*/[A-Z]*.test.js'],
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/components/**/[A-Z]*.js',
  styles: {
    StyleGuide: {
      '@global body': {
        color: 'red',
      }
    }
  }
}