const theme = require('./amplify.theme');

module.exports = {
  plugins: [['@aws-amplify/postcss', theme]],
};
