import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormServiceRegister } from ".";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

describe("<FormServiceRegister />", () => {
  test("Deve apresentar 1 input e 2 botões", () => {
    renderComponent(<FormServiceRegister submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome");
    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonSalvar = screen.getByRole("button", { name: "Salvar" });

    expect(nomeInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonSalvar).toBeVisible();
  });

  test("Deve submeter o form com os dados preenchidos", async () => {
    renderComponent(<FormServiceRegister submitForm={mockSubmit} />);

    const nomeInput = screen.getByLabelText("Nome");
    const buttonSalvar = screen.getByRole("button", { name: "Salvar" });

    await userEvent.type(nomeInput, "Leonardo");

    await fireEvent.submit(buttonSalvar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(
        { nome: "Leonardo" },
        expect.anything()
      );
    });
  });
});
