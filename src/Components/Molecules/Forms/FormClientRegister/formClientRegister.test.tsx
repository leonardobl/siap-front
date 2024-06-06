import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockCidades } from "../../../../Mocks/mock-cidades";
import { mockUfs } from "../../../../Mocks/mock-ufs";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormClientRegister } from ".";

const dataUser = {
  cpf: "123.123.123-04",
  email: "teste@uol.com.br",
  endereco: {
    bairro: "Ininga",
    cep: "64049-700",
    cidade: { nome: "Teresina" },
    complemento: "Complemento",
    logradouro: "Rua 31 de marco",
    numero: "2020",
    uf: "PI",
  },
  nome: "Leonardo Lima",
  senha: "123",
  confirmSenha: "123",
  telefone: "(86) 99523-3237",
};

const mockSubmit = jest.fn();

jest.mock("./useFormClientRegister", () => {
  const hook = jest.requireActual("./useFormClientRegister");

  return {
    _esModule: true,
    ...hook,
    useFormUserRegister: () => {
      return {
        ...hook.useFormClientRegister(),
        cidadesOptions: mockCidades,
        ufOptions: mockUfs,
      };
    },
  };
});

describe("<FormClientRegister />", () => {
  test("deve aprentar o form de cadastro de usuario", () => {
    renderComponent(<FormClientRegister submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome Completo*");
    const cpfInput = screen.getByLabelText("CPF*");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");
    const cepInput = screen.getByLabelText("CEP*");
    const logradouroInput = screen.getByLabelText("Logradouro*");
    const numeroInput = screen.getByLabelText("Número*");
    const complementoInput = screen.getByLabelText("Complemento");
    const bairroInput = screen.getByLabelText("Bairro*");
    const ufInput = screen.getByLabelText("UF*");
    const cidadeInput = screen.getByLabelText("Cidade*");
    const senhaInput = screen.getByLabelText("Senha*");
    const confirmSenhaInput = screen.getByLabelText("Confirmar Senha*");

    expect(nomeInput).toBeVisible();
    expect(cpfInput).toBeVisible();
    expect(telefoneInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(cepInput).toBeVisible();
    expect(logradouroInput).toBeVisible();
    expect(numeroInput).toBeVisible();
    expect(complementoInput).toBeVisible();
    expect(bairroInput).toBeVisible();
    expect(ufInput).toBeVisible();
    expect(cidadeInput).toBeVisible();
    expect(senhaInput).toBeVisible();
    expect(confirmSenhaInput).toBeVisible();
  });

  test("deve apresentar mensagem de erro ao submeter o form sem preencher", async () => {
    renderComponent(<FormClientRegister submitForm={mockSubmit} />);
    const buttonCadastrar = screen.getByRole("button", { name: "Salvar" });

    await fireEvent.submit(buttonCadastrar);

    const erromessages = await screen.findAllByTestId("erro-message");

    for (let erro of erromessages) {
      expect(erro).toBeVisible();
    }

    expect(erromessages).toHaveLength(10);
  });

  test("deve submeter o form ao preencher corretamente", async () => {
    renderComponent(<FormClientRegister submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome Completo*");
    const cpfInput = screen.getByLabelText("CPF*");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");
    const cepInput = screen.getByLabelText("CEP*");
    const logradouroInput = screen.getByLabelText("Logradouro*");
    const numeroInput = screen.getByLabelText("Número*");
    const complementoInput = screen.getByLabelText("Complemento");
    const bairroInput = screen.getByLabelText("Bairro*");
    const ufInput = screen.getByLabelText("UF*");
    const cidadeInput = screen.getByLabelText("Cidade*");
    const senhaInput = screen.getByLabelText("Senha*");
    const confirmSenhaInput = screen.getByLabelText("Confirmar Senha*");

    const button = screen.getByRole("button", { name: "Salvar" });

    await userEvent.type(nomeInput, dataUser.nome);
    await userEvent.type(cpfInput, dataUser.cpf);
    await userEvent.type(telefoneInput, dataUser.telefone);
    await userEvent.type(emailInput, dataUser.email);
    await userEvent.type(cepInput, dataUser.endereco.cep);
    await userEvent.type(logradouroInput, dataUser.endereco.logradouro);
    await userEvent.type(numeroInput, dataUser.endereco.numero);
    await userEvent.type(complementoInput, dataUser.endereco.complemento);
    await userEvent.type(bairroInput, dataUser.endereco.bairro);
    await userEvent.type(senhaInput, dataUser.senha);
    await userEvent.type(confirmSenhaInput, dataUser.confirmSenha);

    await waitFor(async () => {
      await userEvent.click(ufInput);
      await userEvent.click(await screen.findByText(mockUfs[0].label));

      await userEvent.click(cidadeInput);
      await userEvent.click(await screen.findByText(mockCidades[0].label));
    });

    await fireEvent.submit(button);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(dataUser, expect.anything());
    });
  });
});
