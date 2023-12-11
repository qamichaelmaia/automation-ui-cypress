/// <reference types="cypress" />
//const dotenvPlugin = require("cypress-dotenv");
//require("dotenv").config({path: `${process.cwd()}/cypress/support/config/local.env`,
const dotenvPlugin = require("cypress-dotenv");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    //config.env.HOST = process.env.CYPRESS_HOST;
    //config.env.MY_ENV = process.env.CYPRESS_MY_ENV;
    allureWriter(on, config);
    config = dotenvPlugin(config);
    return config;
};
