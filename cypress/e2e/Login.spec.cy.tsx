/// <reference types="cypress" />

const DATA_USER_ADMIN = {
  login: "014.269.043-04",
  password: "STARcheck#123",
};

const DATA_USER_CLIENT = {
  login: "118.724.500-32",
  password: "1234",
};

describe("<FormLogin />", () => {
  beforeEach(() => {
    cy.visit("/login", { failOnStatusCode: false });
  });

  it("Deve conter 2 inputs e 3 botões", () => {
    cy.get("input").should("have.length", 2);

    cy.get("button").should("contain.text", "Entrar");
    cy.get("button").should("contain.text", "Cadastrar");
    cy.get("a#forgot")
      .should("be.visible")
      .and("contain", "Esqueceu sua senha?");
  });

  it("Deve submeter login como admin e direciona '/agendamentos'", () => {
    cy.get(`input[id="login"]`)
      .type(DATA_USER_ADMIN.login)
      .should("have.value", DATA_USER_ADMIN.login);
    cy.get(`input[id="senha"]`)
      .type(DATA_USER_ADMIN.password)
      .should("have.value", DATA_USER_ADMIN.password);

    cy.get("form").submit();
    cy.url().should("include", "/agendamentos");
  });

  it("Deve submeter login como client e direciona '/meus-agendamentos'", () => {
    cy.get(`input[id="login"]`)
      .type(DATA_USER_CLIENT.login)
      .should("have.value", DATA_USER_CLIENT.login);
    cy.get(`input[id="senha"]`)
      .type(DATA_USER_CLIENT.password)
      .should("have.value", DATA_USER_CLIENT.password);

    cy.get("form").submit();
    cy.url().should("include", "/meus-agendamentos");
  });
});
