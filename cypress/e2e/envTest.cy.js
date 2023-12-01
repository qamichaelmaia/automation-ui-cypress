/// <reference types= "cypress"/>

describe("Environment Variables", () => {
    beforeEach(() => {
        const host = Cypress.env("HOST").trim();
        cy.visit(host);
    });

    it("cypress.json or cypress.env.json", () => {
        cy.url().should("include", "http://localhost");
    });
});
