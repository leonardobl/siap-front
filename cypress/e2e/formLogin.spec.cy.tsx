/// <reference types="Cypress" />

describe("<FormLogin />", () => {
  beforeEach(() => cy.visit("/login"));

  it("Deve visitar a pagina de login", () => {
    cy.get("h1").should("contain.text", "Olá, Bem vindo(a)");
  });
});
