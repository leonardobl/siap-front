/// <reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Clientes", () => {
  beforeEach(() =>
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    })
  );

  it("Deve direcionar para a pagina de Clientes", () => {
    cy.goToByTitle("Clientes");
    cy.url().should("contain", "clientes");
  });

  it.only("Deve exibir a listagem de clientes", () => {
    cy.goToByTitle("Clientes");
    cy.get("div[data-cy='clients-wraper']").should("be.visible");

    cy.intercept({
      method: "GET",
      url: "https:agendamentos-api-staging.siap.tec.br:8443/cliente/listar?size=7&page=0",
    }).as("getClientes");

    cy.wait("@getClientes").then(({ response: { body } }) => {
      cy.get("div[data-cy='clients-list']").should(
        "have.length",
        body.content.length
      );
    });
  });
});
