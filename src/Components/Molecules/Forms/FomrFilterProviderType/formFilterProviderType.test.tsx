import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormFilterProviderType } from ".";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

describe("<FormFilterProviderType />", () => {
  test("Deve apresentar 1 input e 2 botoes", () => {
    renderComponent(<FormFilterProviderType submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Tipo de Prestador");
    const buttonLimpar = screen.getByRole("button", { name: "Limpar" });
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    expect(nameInput).toBeVisible();
    expect(buttonLimpar).toBeVisible();
    expect(buttonBuscar).toBeVisible();
  });

  test("Deve submeter o form com as informacoes preenchidas", async () => {
    renderComponent(<FormFilterProviderType submitForm={mockSubmit} />);

    const nameInput = screen.getByLabelText("Tipo de Prestador");
    const buttonBuscar = screen.getByRole("button", { name: "Buscar" });

    await userEvent.type(nameInput, "Leonardo");

    await fireEvent.submit(buttonBuscar);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        { nome: "Leonardo" },
        expect.anything()
      );
    });
  });
});
