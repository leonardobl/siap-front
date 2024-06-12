import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterProfessional } from ".";

import { ConselhoEnum } from "../../../../Enum/conselho";
import userEvent from "@testing-library/user-event";

const dataForm = {
  numeroConselho: "123",
  conselho: ConselhoEnum.COREN,
  cpf: "014.269.043-04",
  nome: "Leonardo",
};

const mockSubmit = jest.fn();

describe("<FormFilterProfessional />", () => {
  test("Deve apresentar 4 inputs e 2 botões", () => {
    renderComponent(<FormFilterProfessional submitForm={mockSubmit} />);
    const nomeInput = screen.getByLabelText("Nome");
    const cpfInput = screen.getByLabelText("CPF");
    const conselhoInput = screen.getByLabelText("Conselho");
    const numeroInput = screen.getByLabelText("Número do Conselho");
    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    expect(nomeInput).toBeVisible();
    expect(cpfInput).toBeVisible();
    expect(conselhoInput).toBeVisible();
    expect(numeroInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonBuscar).toBeVisible();
  });

  test("Deve submeter o form com as informações preenchidas", async () => {
    renderComponent(<FormFilterProfessional submitForm={mockSubmit} />);
    const nomeInput = screen.getByLabelText("Nome");
    const cpfInput = screen.getByLabelText("CPF");
    const conselhoInput = screen.getByLabelText("Conselho");
    const numeroInput = screen.getByLabelText("Número do Conselho");
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nomeInput, dataForm.nome);
    await userEvent.type(cpfInput, dataForm.cpf);
    await userEvent.type(numeroInput, dataForm.numeroConselho);

    await userEvent.click(conselhoInput);
    await userEvent.click(await screen.findByText(dataForm.conselho));

    await fireEvent.submit(buttonBuscar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(dataForm, expect.anything());
    });
  });
});
