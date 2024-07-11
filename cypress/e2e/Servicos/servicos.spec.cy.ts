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
    cy.get('a[title="Serviços"]').click();
    cy.url().should("contain", "servicos");
  });

  it("Deve exibir uma listagem com os servicos", () => {
    cy.get('a[title="Serviços"]').click();
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
});
