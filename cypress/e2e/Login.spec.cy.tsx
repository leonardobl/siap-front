/// <reference types="Cypress" />

describe("<FormLogin />", () => {
  beforeEach(() => cy.visit("/login"));
  it("Deve conter 2 inputs e 3 botões", () => {
    cy.get("input").should("have.length", 2);

    cy.get('input[id="cpf/cnpj"]')
      .type("014.269.043-04")
      .should("have.value", "014.269.043-04");

    cy.get('input[id="senha"]')
      .type("STARcheck#123")
      .should("have.value", "STARcheck#123");

    cy.get("button").should("contain.text", "Entrar");
    cy.get("button").should("contain.text", "Cadastrar");
    cy.get("a#forgot")
      .should("be.visible")
      .and("contain", "Esqueceu sua senha?");
  });
});
