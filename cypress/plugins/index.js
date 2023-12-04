/// <reference types="cypress" />
//const dotenvPlugin = require("cypress-dotenv");
//require("dotenv").config({path: `${process.cwd()}/cypress/support/config/local.env`,
const dotenvPlugin = require("cypress-dotenv");

module.exports = (on, config) => {
    //config.env.HOST = process.env.CYPRESS_HOST;
    //config.env.MY_ENV = process.env.CYPRESS_MY_ENV;
    config = dotenvPlugin(config);
    return config;
};
