import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterServices } from ".";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

describe("<FormFilterServices />", () => {
  test("Deve apresentar 1 input e 2 botões", () => {
    renderComponent(<FormFilterServices submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Serviços");
    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonSalvar = screen.getByRole("button", { name: "Buscar" });

    expect(nameInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonSalvar).toBeVisible();
  });

  test("Deve submeter o form com os dados preenchidos", async () => {
    renderComponent(<FormFilterServices submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Serviços");
    const buttonSalvar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nameInput, "Leo");

    await fireEvent.submit(buttonSalvar);

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledWith(
        { nome: "Leo" },
        expect.anything()
      );
    });
  });
});
