///<reference types="cypress" />

import { DATA_PROVIDER } from "../../fixtures/DataProvider";
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

  it("Deve direcionar para a tela de cadastro", () => {
    cy.get("button").contains("Cadastrar").click();

    cy.location("pathname").should("eq", "/prestadores/cadastro");
  });

  it.only("Deve cadastrar um dados basicos com sucesso", () => {
    cy.get("button").contains("Cadastrar").click();
    cy.get("form[data-cy='form-provider-basic']").should("be.visible");

    cy.get("input[id='Nome']").type(DATA_PROVIDER.nome);
    cy.get("input[id='social']").type(DATA_PROVIDER.razao);
    cy.get("input[id='CNPJ']").type(DATA_PROVIDER.cnpj);
    cy.get("input[id='municipal']").type(DATA_PROVIDER.incricaoMunicipal);
    cy.get("input[id='estadual']").type(DATA_PROVIDER.incricaoEstadual);
    cy.get("input[id='email']").type(DATA_PROVIDER.email);
    cy.get("[id='tipo']").type("{enter}");
    cy.get("[id='telefone']").type(DATA_PROVIDER.telefone);
    cy.get("[id='cep']").type(DATA_PROVIDER.cep).blur();

    cy.intercept({
      method: "GET",
      url: "https://viacep.com.br/ws/64049-700/json",
    }).as("getEndereco");

    cy.wait("@getEndereco").then(() => {
      cy.get("button").contains("Avançar");
    });
  });
});
