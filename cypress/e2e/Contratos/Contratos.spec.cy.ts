/// <reference types="cypress" />

import { DATA_CONTRACT } from "../../fixtures/DataContract";
import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Contratos", () => {
  beforeEach(() => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });
    cy.goToByTitle("Contratos");
  });

  it("Deve ser direcionado para '/contratos'", () => {
    cy.location("pathname").should("eq", "/contratos");
  });

  it("Deve listar os contratos", () => {
    cy.get("div[data-cy='contracts-wrapper']").should("be.visible");
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/contrato/listar?page=0&size=5",
    }).as("getContracts");

    cy.wait("@getContracts").then(({ response: { body } }) => {
      cy.get("div[data-cy='contracts-list']")
        .children()
        .should("have.length", body.content.length);
    });
  });

  it("Deve filtrar com sucesso", () => {
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/contrato/listar?page=0&size=5",
    }).as("getContracts");

    cy.get("button").contains("Filtro").click();
    cy.get("form").should("be.visible");

    cy.wait("@getContracts").then(({ response: { body } }) => {
      cy.get("input[id='nome']").type(body.content[0].prestador.nome);

      cy.get("button").contains("Buscar").click();

      cy.get("div[data-cy='contracts-list']")
        .children()
        .should("contain", body.content[0].prestador.nome);
    });
  });

  it("Deve cadastrar um contrato com sucesso", () => {
    cy.get("button").contains("Cadastrar").click();

    cy.location("pathname").should("contain", "/contratos/cadastro");
    cy.get("form[data-cy='form-contract']").should("be.visible");
    cy.get("input[id='prestador']").type("a");
    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/prestador/listar?nome=a&size=5",
    }).as("getPrestador");

    cy.wait("@getPrestador").then(({ response: { body } }) => {
      cy.get("div").contains(body.content[0].nome).click();
    });

    cy.get("#inicial").click();
    cy.get("div").contains(DATA_CONTRACT.dataInicio).click();
    cy.get("#final").click();
    cy.get("div").contains(DATA_CONTRACT.dataFinal).click();

    cy.get("#servico").click().type("{downArrow}{enter}");
    cy.get("#money").click().type(`${DATA_CONTRACT.valor}}`);

    cy.get("button").contains("Inserir").click();

    cy.get("button").contains("Cadastrar").click();
  });
});
