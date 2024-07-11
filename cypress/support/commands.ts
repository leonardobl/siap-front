/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
  namespace Cypress {
    interface Chainable {
      goToByTitle(title: string): Chainable;
      login({
        login,
        password,
      }: {
        login: string;
        password: string;
      }): Chainable;
    }
  }
}

Cypress.Commands.add(
  "login",
  ({ login, password }: { login: string; password: string }) => {
    cy.visit("/login", { failOnStatusCode: false });
    cy.get(`input[id="login"]`).type(login).should("have.value", login);
    cy.get(`input[id="senha"]`).type(password).should("have.value", password);

    cy.get("form").submit();
  }
);

Cypress.Commands.add("goToByTitle", (title: string) => {
  cy.get(`a[title="${title}"]`).click();
});

export {};
