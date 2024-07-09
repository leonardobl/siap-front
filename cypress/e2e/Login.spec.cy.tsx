/// <reference types="cypress" />

describe("<FormLogin />", () => {
  beforeEach(() => cy.visit("/login"));

  it("Deve conter 2 inputs e 3 botões", () => {
    cy.intercept("/login").as("pageLogin");

    cy.visit("/login");

    cy.get("input").should("have.length", 2);

    cy.get("button").should("contain.text", "Entrar");
    cy.get("button").should("contain.text", "Cadastrar");
    cy.get("a#forgot")
      .should("be.visible")
      .and("contain", "Esqueceu sua senha?");
  });
});
