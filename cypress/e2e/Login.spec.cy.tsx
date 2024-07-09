/// <reference types="cypress" />

const DATA_USER = {
  login: "014.269.043-04",
  password: "STARcheck#123",
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

  it("Deve submeter login com os dados preenchidos", () => {
    cy.get(`input[id="login"]`)
      .type(DATA_USER.login)
      .should("have.value", DATA_USER.login);
    cy.get(`input[id="senha"]`)
      .type(DATA_USER.password)
      .should("have.value", DATA_USER.password);

    cy.get("form").submit();
  });
});
