const dotenvPlugin = require('cypress-dotenv');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())  
  config = dotenvPlugin(config)

  return config;
}
