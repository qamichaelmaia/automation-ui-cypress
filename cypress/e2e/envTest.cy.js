/// <reference types= "cypress"/>

//docker-compose up -d | docker-compose down

describe("Environment Variables", () => {
    before(() => {
        cy.fixture(`${Cypress.env("MY_ENV")}/data.json`).then((data) => {
            cy.log(data);
        });
    });

    beforeEach(() => {
        const host = Cypress.env("HOST").trim(); //use .trim( ) if there is an error in url spacing
        cy.visit(host);
    });

    it("cypress.json or cypress.env.json", () => {
        cy.url().should("include", Cypress.env("HOST").trim());
    });

    it(
        "Config Test Env",
        {
            env: {
                myEnv: "local",
            },
        },
        () => {
            cy.log(Cypress.env("myEnv"));
        }
    );
});
