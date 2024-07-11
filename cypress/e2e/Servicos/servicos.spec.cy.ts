///<reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Servicos", () => {
  beforeEach(() =>
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    })
  );

  it("Deve ser direcionado para a listagem de serviços", () => {
    cy.goToByTitle("Serviços");
    cy.url().should("contain", "servicos");
  });

  it("Deve exibir uma listagem com os servicos", () => {
    cy.goToByTitle("Serviços");

    cy.get('div[data-cy="services-wrapper"]').should("be.visible");

    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/servico/listar?page=0&size=7",
    }).as("getServices");

    cy.wait("@getServices").then(({ response: { body } }) => {
      cy.get('div[data-cy="services-list"]')
        .children()
        .should("have.length", body.content.length);
    });
  });

  it("Deve exibir o form do filtro ao clicar no botão do filtro", () => {
    cy.goToByTitle("Serviços");
    cy.get("button").contains("Filtro").click();
    cy.get('form[data-cy="filter-services"]').should("be.visible");
  });

  it("Deve cadastrar o serviço com sucesso", () => {
    cy.goToByTitle("Serviços");
    cy.get("button").contains("Cadastrar").click();
    cy.get("form[data-cy='form-service-register']").should("be.visible");

    const inputValue = `Teste - ${Math.random()}`;

    cy.get("input#nome").type(inputValue);

    cy.get("button").contains("Salvar").click();

    cy.get('div[data-cy="services-list"]')
      .children()
      .should("contain.text", inputValue);
  });
});
