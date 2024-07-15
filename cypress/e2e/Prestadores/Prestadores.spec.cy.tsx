///<reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Prestadores", () => {
  beforeEach(() => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });

    cy.goToByTitle("Prestadores");
  });

  it("Deve exibir o filtro", () => {
    cy.location("pathname").should("eq", "/prestadores");

    cy.get("button").contains("Filtro").click();
    cy.get("form[data-cy='providers-filter']").should("be.visible");
  });

  it("Deve filtrar com sucesso", () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/prestador/listar*",
    }).as("getPrestadores");

    cy.get("button").contains("Filtro").click();

    cy.wait("@getPrestadores").then(({ response: { body } }) => {
      if (body.content.length) {
        cy.get("input[id='nome']").type(body.content[0].nome);
        cy.get("button").contains("Buscar").click();
      }
    });

    cy.wait("@getPrestadores").then(({ response: { body } }) => {
      if (body.content.length) {
        cy.get("div[data-cy='providers-list']")
          .children()
          .should("contain", body.content[0].nome);
      }
    });
  });

  it("Deve exibir a listagem de prestadores", () => {
    cy.get("div[data-cy='providers-wrapper']").should("be.visible");

    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/prestador/listar*",
    }).as("getPrestadores");

    cy.wait("@getPrestadores").then(({ response: { body } }) => {
      cy.get("div[data-cy='providers-list']")
        .children()
        .should("have.length", body.content.length);
    });
  });
});
