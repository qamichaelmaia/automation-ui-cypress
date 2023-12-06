/// <reference types="cypress" />
import { homePage, productSearchPage } from "../support/pages";
const data = require("../fixtures/data.json");

// docker-compose up -d | docker-compose down

describe("Product Search", () => {
    before(() => {
        cy.intercept(
            {
                method: "GET",
                url: "/wp-admin/admin-ajax*",
                query: {
                    term: "Jacket",
                },
            },
            (req) => {
                req.reply({
                    statusCode: 200,
                    body: `${req.query.callback}(${JSON.stringify(
                        data.autocompleteSearchData
                    )})`,
                });
            }
        );
    });

    beforeEach(() => {
        const host = Cypress.env("HOST");
        cy.visit(host);
    });

    it("autocomplete product item should be return correctly", () => {
        homePage.searchMagnifier();
        productSearchPage.search("jacket");
        productSearchPage.productList
            .first()
            .should("have.attr", "title", "Ingrid Running Jacket");
    });
});
