//const reporter = require('cypress-mochawesome-reporter/plugin');
const cucumber = require('cypress-cucumber-preprocessor').default
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  //rep = reporter(on);
  on('file:preprocessor', cucumber())  
  config = dotenvPlugin(config)
  config.env.username = process.env.CY_USERNAME;
  config.env.password = process.env.CY_PASSWORD;

  return config;
}
