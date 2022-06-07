/// <reference types="cypress" />

//const reporter = require('cypress-mochawesome-reporter/plugin');
const path = require("path");
require('dotenv').config({
  path: path.join(__dirname, "..", "..", "..", "..", ".env"),
});
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  config.env.CY_USERNAME = process.env.CY_USERNAME;
  config.env.CY_PASSWORD = process.env.CY_PASSWORD;
  on('file:preprocessor', cucumber())

  return config;
}
