/// <reference types="cypress" />

export const DATA_USER_ADMIN = {
  login: "014.269.043-04",
  password: "STARcheck#123",
};

export const DATA_USER_CLIENT = {
  login: "118.724.500-32",
  password: "1234",
};

describe("<FormLogin />", () => {
  it("Deve conter 2 inputs e 3 botões", () => {
    cy.visit("/login", { failOnStatusCode: false });
    cy.get("input").should("have.length", 2);

    cy.get("button").should("contain.text", "Entrar");
    cy.get("button").should("contain.text", "Cadastrar");
    cy.get("a#forgot")
      .should("be.visible")
      .and("contain", "Esqueceu sua senha?");
  });

  it("Deve submeter login como admin e direciona '/agendamentos'", () => {
    cy.login({
      login: DATA_USER_ADMIN.login,
      password: DATA_USER_ADMIN.password,
    });
    cy.url().should("include", "/agendamentos");
  });

  it("Deve submeter login como client e direciona '/meus-agendamentos'", () => {
    cy.login({
      login: DATA_USER_CLIENT.login,
      password: DATA_USER_CLIENT.password,
    });

    cy.url().should("include", "/meus-agendamentos");
  });

  it("Deve apresentar msg de erro ao submeter sem login/senha", () => {
    cy.visit("/login", { failOnStatusCode: false });
    cy.get("form").submit();
    cy.get('[data-cy="erro-message"]')
      .should("have.length", 2)
      .should("be.visible");
  });
});