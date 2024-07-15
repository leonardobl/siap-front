/// <reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Tipo Prestador", () => {
  beforeEach(() => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });

    cy.goToByTitle("Tipos de Prestadores");
  });

  it("Deve ser direcionado apara '/tipo-prestadores'", () => {
    cy.location("pathname").should("eq", "/tipo-prestadores");
  });

  it("Deve listar os tipos de pretadores", () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/tipo-prestador/listar?page=0&size=5",
    }).as("getTiposPrestadores");

    cy.get("div[data-cy='providers-types-wrapper']").should("be.visible");

    cy.wait("@getTiposPrestadores").then(({ response: { body } }) => {
      cy.get("div[data-cy='providers-types-list']")
        .children()
        .should("have.length", body.content.length);
    });
  });

  it("Deve filtrar com sucesso", async () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/tipo-prestador/listar*",
    }).as("getTiposPrestadores");

    cy.get("button").contains("Filtro").click().should("be.visible");

    cy.wait("@getTiposPrestadores").then(({ response: { body } }) => {
      if (body.content.length) {
        cy.get("input[id='tipoPrestador']").type(body.content[0].nome);
        cy.get("button").contains("Buscar").click();
      }
    });

    cy.wait("@getTiposPrestadores").then(({ response: { body } }) => {
      cy.get("div[data-cy='providers-types-list']")
        .children()
        .should("have.length", body.content.length)
        .and("contain", body.content[0].nome);
    });
  });

  it.only("Deve cadastrar com sucesso", () => {
    cy.intercept({
      method: "POST",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/tipo-prestador/cadastrar",
    }).as("postProvider");
    const TipoPrestador = `Tipo - ${new Date().getTime()}`;

    cy.get("button").contains("Cadastrar").click();

    cy.get("form[data-cy='form-provider-type']").should("be.visible");

    cy.get("input[id='nome']").type(TipoPrestador);

    cy.get("button").contains("Salvar").click();

    cy.wait("@postProvider")
      .then(({ response }) => response.statusCode)
      .should("eq", 201);
  });
});
