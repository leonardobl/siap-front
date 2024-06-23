import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterUsers } from ".";
import { IUsuariosListProps } from "../../../../Types/usuario";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

const dataForm = {
  cpfCnpj: "014.269.043-04",
  email: "leonardo@uol.com.br",
  nome: "Leonardo Lima",
  telefone: "(86) 99999-9999",
};

describe("<FormFilterUsers />", () => {
  test("Deve apresentar 4 input e 2 botões", () => {
    renderComponent(<FormFilterUsers submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome");
    const cnpjInput = screen.getByLabelText("CPF/CNPJ");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");

    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buscarLimpar = screen.getByRole("button", { name: "Buscar" });

    expect(nomeInput).toBeVisible();
    expect(cnpjInput).toBeVisible();
    expect(telefoneInput).toBeVisible();
    expect(emailInput).toBeVisible();

    expect(buttonLimpar).toBeVisible();
    expect(buscarLimpar).toBeVisible();
  });

  test("Deve submeter o form com as informacoes preenchido", async () => {
    renderComponent(<FormFilterUsers submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome");
    const cnpjInput = screen.getByLabelText("CPF/CNPJ");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");

    const buscarLimpar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nomeInput, dataForm.nome);
    await userEvent.type(cnpjInput, dataForm.cpfCnpj);
    await userEvent.type(telefoneInput, dataForm.telefone);
    await userEvent.type(emailInput, dataForm.email);

    await fireEvent.submit(buscarLimpar);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(dataForm, expect.anything());
    });
  });
});
