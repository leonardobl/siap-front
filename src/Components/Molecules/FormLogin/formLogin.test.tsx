import { fireEvent, screen, waitFor } from "@testing-library/react";
import { FormLogin } from ".";
import { renderComponent } from "../../../Utils/renderComponent";
import userEvent from "@testing-library/user-event";

const dataUser = {
  cpfCNPJ: "123.269.123-32",
  senha: "123123",
};

jest.mock("./useFormLogin", () => {
  const hook = jest.requireActual("./useFormLogin");

  return {
    _esModule: true,
    ...hook,
    useFormLogin: () => {
      return {
        ...hook.useFormLogin(),
      };
    },
  };
});

const mockSubmit = jest.fn();

describe("<FormLogin />", () => {
  test("Deve parsentar input cpf, input senha, button entrar, button cadastrar", () => {
    renderComponent(<FormLogin submiteForm={mockSubmit} />);

    const cpfInput = screen.getByLabelText("CPF/CNPJ*");
    const senhaInput = screen.getByLabelText("Senha*");
    const buttonEntrar = screen.getByRole("button", { name: "Entrar" });
    const buttonCadastrar = screen.getByRole("button", {
      name: "Cadastrar",
    });

    expect(cpfInput).toBeInTheDocument();
    expect(cpfInput).toBeVisible();

    expect(senhaInput).toBeInTheDocument();
    expect(senhaInput).toBeVisible();

    expect(buttonEntrar).toBeInTheDocument();
    expect(buttonEntrar).toBeVisible();

    expect(buttonCadastrar).toBeInTheDocument();
    expect(buttonCadastrar).toBeVisible();
  });

  test("Deve apresentar erro ao tentar submeter o form sem preencher", async () => {
    renderComponent(<FormLogin submiteForm={mockSubmit} />);
    const buttonEntrar = screen.getByRole("button", { name: "Entrar" });

    fireEvent.submit(buttonEntrar);

    const errorMessages = await screen.findAllByTestId("erro-message");

    expect(errorMessages).toHaveLength(2);
    expect(mockSubmit).not.toBeCalled();

    for (let erro of errorMessages) {
      expect(erro).toBeVisible();
    }
  });

  test("Deve submeter o forme ao preencher o form", async () => {
    renderComponent(<FormLogin submiteForm={mockSubmit} />);
    const buttonEntrar = screen.getByRole("button", { name: "Entrar" });
    const cpfInput = screen.getByLabelText("CPF/CNPJ*");
    const senhaInput = screen.getByLabelText("Senha*");

    await waitFor(async () => {
      await userEvent.type(cpfInput, dataUser.cpfCNPJ);
      await userEvent.type(senhaInput, dataUser.senha);
    });

    fireEvent.submit(buttonEntrar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(dataUser, expect.anything());
    });
  });
});
