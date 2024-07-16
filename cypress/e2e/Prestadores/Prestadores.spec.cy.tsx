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
    //CADASTRO BASICO

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

    cy.intercept({
      method: "POST",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/prestador/cadastrar",
    }).as("postPrestador");

    cy.wait("@getEndereco").then(() => {
      cy.wait(300).then(() => {
        cy.get("button").contains("Avançar").click();
      });
    });

    cy.wait("@postPrestador")
      .then(({ response }) => response.statusCode)
      .should("eq", 201)
      .then(() => {
        cy.get("form[data-cy='form-finance']").should("be.visible");
      });

    //CADASTRO FINANCEIRO

    cy.intercept({
      method: "POST",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/prestador/*/vincular-dados-financeiros",
    }).as("postFinancas");

    cy.get("[id='banco']").click().type("{enter}");
    cy.get("input[id='agencia']").type("123");
    cy.get("input[id='conta']").type("456");
    cy.get("button").contains("Avançar").click();

    cy.wait("@postFinancas")
      .then(({ response }) => response.statusCode)
      .should("eq", 200)
      .then(() => {
        cy.get("div[data-cy='profissional-wrapper']").should("be.visible");
      });

    //CADASTRO PROFISSIONAL

    cy.get("button").contains("Cadastrar").click();
    cy.get("form[data-cy='form-profissional-register']").should("be.visible");

    cy.get("input[id='nome']").type(DATA_PROVIDER.profissional.nome);
    cy.get("input[id='cpf']").type(DATA_PROVIDER.profissional.cpf);
    cy.get("input[id='conselho']").click().type("{enter}");
    cy.get("input[id='numero']").type(DATA_PROVIDER.profissional.numConselho);
    cy.get("input[id='uf']").click().type("{enter}");
    cy.get("input[id='email']").type(DATA_PROVIDER.profissional.email);
    cy.get("input[id='telefone']").type(DATA_PROVIDER.profissional.telefone);

    cy.get("button[data-cy='salvar-profissional']").click();

    cy.intercept({
      method: "POST",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/profissional/cadastrar",
    }).as("postProfissional");

    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/profissional/listar*",
    }).as("getProfissionais");

    cy.wait("@postProfissional")
      .then(({ response }) => response.statusCode)
      .should("eq", 201);

    cy.wait("@getProfissionais").then(({ response: { body } }) => {
      if (body?.content?.length) {
        cy.get("div[data-cy='profissional-list']")
          .children()
          .should("have.length", body.content.length)
          .contains(DATA_PROVIDER.profissional.nome);
      }
    });

    cy.get("button").contains("Salvar").click();
    cy.location("pathname").should("eq", "/prestadores");
  });
});
