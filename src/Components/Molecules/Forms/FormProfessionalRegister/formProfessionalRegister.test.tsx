import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormProfessionalRegister } from ".";
import { ConselhoEnum } from "../../../../Enum/conselho";
import { mockUfs } from "../../../../Mocks/mock-ufs";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();
const mockCancel = jest.fn();

const dataForm = {
  conselho: ConselhoEnum.CREF,
  cpf: "014.269.043-04",
  nome: "Lima",
  numeroConselho: "123",
  ufConselho: mockUfs[0].label,
  email: "teste@uol.com.br",
  telefone: "(86) 99523-3237",
};

describe("<FormProfessionalRegister />", () => {
  test("Deve apresentar 7 inputs e 2 botõe", () => {
    renderComponent(
      <FormProfessionalRegister onCancel={mockCancel} submitForm={mockSubmit} />
    );

    const nomeInput = screen.getByLabelText("Nome*");
    const cpfInput = screen.getByLabelText("CPF*");
    const conselhoInput = screen.getByLabelText("Conselho*");
    const numeronput = screen.getByLabelText("Número do Conselho*");
    const ufInput = screen.getByLabelText("UF do Conselho*");
    const emailInput = screen.getByLabelText("E-mail");
    const telefoneInput = screen.getByLabelText("Telefone");
    const buttonCancelar = screen.getByRole("button", { name: "Cancelar" });
    const buttonSalvar = screen.getByRole("button", { name: "Salvar" });

    expect(nomeInput).toBeVisible();
    expect(cpfInput).toBeVisible();
    expect(numeronput).toBeVisible();
    expect(conselhoInput).toBeVisible();
    expect(ufInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(telefoneInput).toBeVisible();
    expect(buttonCancelar).toBeVisible();
    expect(buttonSalvar).toBeVisible();
  });

  test("Deve apresentar 5 mensagens de erro ao não preencher os dados", async () => {
    renderComponent(
      <FormProfessionalRegister onCancel={mockCancel} submitForm={mockSubmit} />
    );

    const buttonSalvar = screen.getByRole("button", { name: "Salvar" });

    await fireEvent.submit(buttonSalvar);

    const erromessages = await screen.findAllByTestId("erro-message");

    for (let erro of erromessages) {
      expect(erro).toBeVisible();
    }

    expect(erromessages).toHaveLength(5);
  });

  test("Deve submeter o form com os dados preenchidos", async () => {
    renderComponent(
      <FormProfessionalRegister onCancel={mockCancel} submitForm={mockSubmit} />
    );

    const nomeInput = screen.getByLabelText("Nome*");
    const cpfInput = screen.getByLabelText("CPF*");
    const conselhoInput = screen.getByLabelText("Conselho*");
    const numeronput = screen.getByLabelText("Número do Conselho*");
    const ufInput = screen.getByLabelText("UF do Conselho*");
    const emailInput = screen.getByLabelText("E-mail");
    const telefoneInput = screen.getByLabelText("Telefone");
    const buttonSalvar = screen.getByRole("button", { name: "Salvar" });

    await userEvent.type(nomeInput, dataForm.nome);
    await userEvent.type(cpfInput, dataForm.cpf);
    await userEvent.type(numeronput, dataForm.numeroConselho);
    await userEvent.type(emailInput, dataForm.email);
    await userEvent.type(telefoneInput, dataForm.telefone);

    await userEvent.click(conselhoInput);
    await userEvent.click(await screen.findByText(dataForm.conselho));

    await userEvent.click(ufInput);
    await userEvent.click(await screen.findByText(dataForm.ufConselho));

    await fireEvent.submit(buttonSalvar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenLastCalledWith(dataForm, expect.anything());
    });
  });
});
