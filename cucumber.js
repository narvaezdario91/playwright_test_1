module.exports = {
  default: {
    paths: [
      'features/**/*.feature',
    ],
    require: [
      'features/support/**/*.ts',
      'features/step-definitions/**/*.ts',
    ],
    requireModule: [
      'ts-node/register',
    ],
    format: [
      '@serenity-js/cucumber',
      ['html', 'target/cucumber-report.html'],
    ],
    formatOptions: {
      specDirectory: 'features',
    },
    language: 'es',
  },
};
