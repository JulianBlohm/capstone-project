module.exports = {
  ignore: ['**/App.js','**/*.test.js'],
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