/// <reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Clientes", () => {
  beforeEach(() => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });

    cy.goToByTitle("Clientes");
  });

  it("Deve direcionar para a pagina de Clientes", () => {
    cy.url().should("contain", "clientes");
  });

  it("Deve exibir a listagem de clientes", () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/cliente/listar?size=7&page=0",
    }).as("getClientes");

    cy.get("div[data-cy='clients-wrapper']").should("be.visible");

    cy.wait("@getClientes").then(({ response: { body } }) => {
      cy.get("div[data-cy='clients-list']")
        .children()
        .should("have.length", body.content.length);
    });
  });

  it("Deve exibir o filtro de clientes", () => {
    cy.get("button").contains("Filtro").click();
    cy.get("form[data-cy='filter-clients']").should("be.visible");
  });

  it("Deve filtrar com sucesso", () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/cliente/listar?size=7&page=0",
    }).as("getClientes");

    cy.get("button").contains("Filtro").click();

    cy.wait("@getClientes").then(({ response: { body } }) => {
      if (body?.content?.length) {
        cy.get("input[id='nome']").type(body.content[0].nome);
        cy.get("button").contains("Buscar").click();

        cy.get("div[data-cy='clients-list']")
          .children()
          .should("contain.text", body.content[0].nome);
      }
    });
  });
});
