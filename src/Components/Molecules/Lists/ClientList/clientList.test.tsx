import { screen } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { ClientList } from ".";
import { mockClientList } from "../../../../Mocks/mock-client";
import { IClienteDTO } from "../../../../Types/cliente";

describe("<ClientList />", () => {
  test("Deve renderizar uma lista de usuarios", () => {
    renderComponent(<ClientList clients={mockClientList as IClienteDTO[]} />);

    for (let user of mockClientList) {
      const nome = screen.getByText(user.nome);
      const cpf = screen.getByText(user.cpf);

      expect(nome).toBeVisible();
      expect(cpf).toBeVisible();
    }

    const olhos = screen.getAllByAltText("icone olho");

    for (let olho of olhos) {
      expect(olho).toBeVisible();
    }

    expect(olhos).toHaveLength(mockClientList.length);
  });
});
