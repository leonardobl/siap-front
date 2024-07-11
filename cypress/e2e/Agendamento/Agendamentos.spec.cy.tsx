/// <reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/DataUser";

describe("Agendamentos", () => {
  beforeEach(() => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });
  });

  it("Deve exibir as listagem de agendamentos", () => {
    cy.get('[data-cy="schedules-wrapper"]').should("be.visible");

    cy.intercept({
      method: "GET",
      url: "https://agendamentos-api-staging.siap.tec.br:8443/agendamento/listar?size=5&page=0",
    }).as("getSchedules");

    cy.wait("@getSchedules").then(({ response: { body } }) => {
      console.log("response body:", body.content);

      cy.get('[data-cy="schedules-list"]')
        .children()
        .should("have.length", body.content.length);
    });
  });

  it("Deve exibir o form ao clicar no botão filtro", () => {
    cy.get("button").contains("Filtro").click();
    cy.get('[data-cy="filter-schedule"]').should("be.visible");
  });
});
