const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require("./cypress/plugins/index.js")(on, config);
        },

        "env": {
            HOST: "http://localhost",
            PRODUCT: "http://localhost/produtos/"
          },

          /// As pastas Mocha estão aparecendo em node_modules
          ///"test": "npx cypress run --reporter mochawesome --reporter-options reportDir=/Users/conta/OneDrive/Documentos/Repositório/sample-cy-intercept/mochawesome-report" (CRIAR PASTA SEPARADAMENTE)
          reporter: "mochawesome",
          reporterOptions: {
            reportDir: "cypress/results",
            overwrite: false,
            html: false,
            json: true
          },
    },
});
