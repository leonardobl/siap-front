/// <reference types="cypress" />

describe("<ScheduleList />", () => {
  beforeEach(() => cy.visit("/agendamento"));

  it("Deve exibir as listagem de agendamentos", () => {
    cy.get('[data-cy="schedule-list"]').should("be.visible");
  });
});
