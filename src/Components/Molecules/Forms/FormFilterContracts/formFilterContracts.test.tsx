import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterContracts } from ".";
import userEvent from "@testing-library/user-event";
import { reverseToIsoDate } from "../../../../Utils/dateTransform";

const mockSubmit = jest.fn();

const formData = {
  cnpj: "46.546.546/5465-46",
  dataFim: reverseToIsoDate(new Date().toLocaleDateString()),
  dataInicio: reverseToIsoDate(new Date().toLocaleDateString()),
  nome: "Leonardo Lima",
  razaoSocial: "sfdjlskdjflks",
  servico: "dfsdfsdfsd",
};

describe("<FormFilterContracts />", () => {
  test("Deve apresentar 6 inputs e 2 botões", () => {
    renderComponent(<FormFilterContracts submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome Fantasia");
    const razaonput = screen.getByLabelText("Razão Social");
    const cnpjInput = screen.getByLabelText("CNPJ");
    const servicoInput = screen.getByLabelText("Serviço");
    const inicioInput = screen.getByLabelText("Data Inicial");
    const fimInput = screen.getByLabelText("Data final");

    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    expect(nomeInput).toBeVisible();
    expect(razaonput).toBeVisible();
    expect(cnpjInput).toBeVisible();
    expect(servicoInput).toBeVisible();
    expect(inicioInput).toBeVisible();
    expect(fimInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonBuscar).toBeVisible();
  });

  test("Deve submeter o form com as infomações preenchidas", async () => {
    renderComponent(<FormFilterContracts submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome Fantasia");
    const razaonput = screen.getByLabelText("Razão Social");
    const cnpjInput = screen.getByLabelText("CNPJ");
    const servicoInput = screen.getByLabelText("Serviço");
    const inicioInput = screen.getByLabelText("Data Inicial");
    const fimInput = screen.getByLabelText("Data final");

    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nomeInput, formData.nome);
    await userEvent.type(razaonput, formData.razaoSocial);
    await userEvent.type(cnpjInput, formData.cnpj);
    await userEvent.type(servicoInput, formData.servico);

    await fireEvent.change(inicioInput, {
      target: { value: new Date() },
    });

    await fireEvent.change(fimInput, {
      target: { value: new Date() },
    });

    await fireEvent.submit(buttonBuscar);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(formData, expect.anything());
    });
  });
});
