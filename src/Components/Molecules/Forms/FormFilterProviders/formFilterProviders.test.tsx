import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterProviders } from ".";
import userEvent from "@testing-library/user-event";
import { mockCidades } from "../../../../Mocks/mock-cidades";
import { mockTipo } from "../../../../Mocks/mock-tipo";

const mockSubmit = jest.fn();

jest.mock("./useFormFilterProviders", () => {
  const hook = jest.requireActual("./useFormFilterProviders");
  return {
    _esModule: true,
    ...hook,
    useFormFilterProviders: () => {
      return {
        ...hook.useFormFilterProviders(),
        cidadesOptions: mockCidades,
        tipoOptions: mockTipo,
      };
    },
  };
});

describe("<FormFilterProviders />", () => {
  test("Deve apresentar 5 inputs e 2 botões", () => {
    renderComponent(<FormFilterProviders submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Nome");
    const cpnjInput = screen.getByLabelText("CNPJ");
    const cidadeInput = screen.getByLabelText("Cidade");
    const tipoInput = screen.getByLabelText("Tipo");
    const statusInput = screen.getByLabelText("Status");
    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    expect(nameInput).toBeVisible();
    expect(cpnjInput).toBeVisible();
    expect(cidadeInput).toBeVisible();
    expect(tipoInput).toBeVisible();
    expect(statusInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonBuscar).toBeVisible();
  });

  test("Deve apresentar msg de erro ao preencher o CNPJ errado", async () => {
    renderComponent(<FormFilterProviders submitForm={mockSubmit} />);

    const cpnjInput = screen.getByLabelText("CNPJ");

    await userEvent.type(cpnjInput, "123456");

    const erroMessage = screen.getByTestId("erro-message");

    await waitFor(async () => {
      expect(erroMessage).toBeVisible();
    });
  });

  test("Deve submeter o form com os dados informados", async () => {
    renderComponent(<FormFilterProviders submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Nome");
    const cpnjInput = screen.getByLabelText("CNPJ");
    const cidadeInput = screen.getByLabelText("Cidade");
    const tipoInput = screen.getByLabelText("Tipo");
    const statusInput = screen.getByLabelText("Status");
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nameInput, "Leonardo");
    await userEvent.type(cpnjInput, "22.331.223/2312-22");

    await userEvent.click(cidadeInput);
    await userEvent.click(await screen.findByText(mockCidades[0].value));

    await userEvent.click(tipoInput);
    await userEvent.click(await screen.findByText(mockTipo[0].value));

    await userEvent.click(statusInput);
    await userEvent.click(await screen.findByText("ATIVO"));

    await fireEvent.submit(buttonBuscar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(
        {
          nome: "Leonardo",
          cnpj: "22.331.223/2312-22",
          status: "ATIVO",
          tipo: mockTipo[0].value,
          cidade: mockCidades[0].value,
        },
        expect.anything()
      );
    });
  });
});
