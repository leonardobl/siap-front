/// <reference types="cypress" />

import { maskCep } from "../../../src/Utils/masks";
import { DATA_CLIENT, DATA_USER_ADMIN } from "../../fixtures/DataUser";

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

  it("Deve cadastrar um cliente com sucesso", () => {
    cy.get("button").contains("Cadastrar").click();

    cy.location("pathname").should("eq", "/clientes/cadastro");

    cy.get("input[id='nome']").type(DATA_CLIENT.nome);
    cy.get("input[id='cpf']").type(DATA_CLIENT.cpf);
    cy.get("input[id='telefone']").type(DATA_CLIENT.telefone);
    cy.get("input[id='email']").type(DATA_CLIENT.email);
    cy.get("input[id='cep']").type(DATA_CLIENT.cep).as("buttonCep");
    cy.get("@buttonCep").blur();
    cy.intercept({
      method: "GET",
      url: `https://viacep.com.br/ws/${maskCep(DATA_CLIENT.cep)}/json`,
    }).as("getCep");

    cy.wait("@getCep").then(() => {
      cy.get("input[id='numero']").type(DATA_CLIENT.numero);
      cy.get("input[id='senha']").type(DATA_CLIENT.senha);
      cy.get("input[id='confirm']").type(DATA_CLIENT.senha);
      cy.get("form").submit();
    });

    cy.intercept({
      method: "POST",
      url: `https://agendamentos-api-staging.siap.tec.br:8443/cliente/cadastrar`,
    }).as("submitForm");

    cy.wait("@submitForm")
      .then(({ response }) => response.statusCode)
      .should("eq", 201);
  });
});
