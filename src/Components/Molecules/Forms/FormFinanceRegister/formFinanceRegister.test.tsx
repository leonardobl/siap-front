import {
  fireEvent,
  queryByText,
  screen,
  waitFor,
} from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFinanceRegister } from "./index";
import { mockBancos } from "../../../../Mocks/mock-bancos";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

const dataFinance = {
  agencia: "123",
  codigoBanco: mockBancos[0].label,
  conta: "321",
  operacao: "13",
};

jest.mock("./useFormFinanceRegister", () => {
  const hook = jest.requireActual("./useFormFinanceRegister");

  return {
    _esModule: true,

    ...hook,
    useFormFinanceRegister: () => {
      return {
        ...hook.useFormFinanceRegister(),
        bancoOptions: mockBancos,
      };
    },
  };
});

describe("<FormFinanceRegister />", () => {
  test("Deve apresentar 4 inputs e um botão", () => {
    renderComponent(<FormFinanceRegister submitForm={mockSubmit} />);
    const bancoInput = screen.getByLabelText("Banco*");
    const agenciaInput = screen.getByLabelText("Agência*");
    const contaInput = screen.getByLabelText("Conta*");
    const operacaoInput = screen.getByLabelText("Operação");
    const butao = screen.getByRole("button", { name: "Avançar" });

    expect(bancoInput).toBeVisible();
    expect(agenciaInput).toBeVisible();
    expect(contaInput).toBeVisible();
    expect(operacaoInput).toBeVisible();
    expect(butao).toBeVisible();
  });

  test("Deve apresentar mesagem de erro ao submeter o form sem preencher", async () => {
    renderComponent(<FormFinanceRegister submitForm={mockSubmit} />);
    const butao = screen.getByRole("button", { name: "Avançar" });

    fireEvent.submit(butao);

    const erros = await screen.findAllByTestId("erro-message");

    for (let erro of erros) {
      expect(erro).toBeVisible();
    }

    expect(erros).toHaveLength(4);
  });

  test("Deve submeter ao preencher o form", async () => {
    renderComponent(<FormFinanceRegister submitForm={mockSubmit} />);
    const bancoInput = screen.getByLabelText("Banco*");
    const agenciaInput = screen.getByLabelText("Agência*");
    const contaInput = screen.getByLabelText("Conta*");
    const operacaoInput = screen.getByLabelText("Operação");
    const butao = screen.getByRole("button", { name: "Avançar" });

    await userEvent.type(agenciaInput, dataFinance.agencia);
    await userEvent.type(contaInput, dataFinance.conta);
    await userEvent.type(operacaoInput, dataFinance.operacao);

    await userEvent.click(bancoInput);
    await userEvent.click(screen.queryByText(dataFinance.codigoBanco));

    await fireEvent.submit(butao);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(dataFinance, expect.anything());
    });
  });
});
