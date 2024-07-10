/// <reference types="cypress" />

import { DATA_USER_ADMIN } from "../../fixtures/dataUser";

describe("<ScheduleList />", () => {
  it("Deve exibir as listagem de agendamentos", () => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });
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
});
