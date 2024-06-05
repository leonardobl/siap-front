import { fireEvent, screen, waitFor } from "@testing-library/react";
import { FormFilterClient } from ".";
import { renderComponent } from "../../../../Utils/renderComponent";
import userEvent from "@testing-library/user-event";

const dataFilter = {
  nome: "Leonardo Lima",
  email: "email@uol.com.br",
  cpf: "014.269.043-04",
  telefone: "(86) 99523-3237",
};

const mockSubmit = jest.fn();

jest.mock("./useFormFilterClient", () => {
  const hook = jest.requireActual("./useFormFilterClient");
  return {
    _esModule: true,
    ...hook,
    useFormFilterClient: () => {
      return {
        ...hook.useFormFilterClient(),
      };
    },
  };
});

describe("<FormFilterClient />", () => {
  test("Deve apresentar 4 inputs (nome, cpf, telefone, email)", () => {
    renderComponent(<FormFilterClient submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Nome Completo");
    const cpfInput = screen.getByLabelText("CPF");
    const telefonenput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");

    expect(nameInput).toBeVisible();
    expect(cpfInput).toBeVisible();
    expect(telefonenput).toBeVisible();
    expect(emailInput).toBeVisible();
  });

  test("Deve apresentar mensagem de erro ao preeencher um email invalido", async () => {
    renderComponent(<FormFilterClient submitForm={mockSubmit} />);

    const emailInput = screen.getByLabelText("E-mail");
    await userEvent.type(emailInput, "emailinvalido");

    const buttonFiltrar = screen.getByRole("button", { name: "Buscar" });

    await fireEvent.submit(buttonFiltrar);

    await waitFor(async () => {
      const msgErro = await screen.findByTestId("erro-message");
      expect(msgErro).toBeVisible();
    });
  });

  test("Deve submeter o filtro com os dados corretos", async () => {
    renderComponent(<FormFilterClient submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Nome Completo");
    const cpfInput = screen.getByLabelText("CPF");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");
    const buttonSubmit = screen.getByRole("button", { name: "Buscar" });

    await waitFor(async () => {
      await userEvent.type(nameInput, dataFilter.nome);
    });

    await waitFor(async () => {
      await userEvent.type(cpfInput, dataFilter.cpf);
    });

    await waitFor(async () => {
      await userEvent.type(telefoneInput, dataFilter.telefone);
    });

    await waitFor(async () => {
      await userEvent.type(emailInput, dataFilter.email);
    });

    fireEvent.submit(buttonSubmit);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(dataFilter, expect.anything());
    });
  });
});
