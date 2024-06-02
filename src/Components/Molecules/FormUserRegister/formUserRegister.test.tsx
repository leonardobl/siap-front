import { Screen } from "@testing-library/react";
import { renderComponent } from "../../../Utils/renderComponent";
import { FormUserRegister } from ".";
import { mockCidades } from "../../../Mocks/mock-cidades";
import { mockUfs } from "../../../Mocks/mock-ufs";

const mockSubmit = jest.fn();

jest.mock("./useFormUserRegister", () => {
  const hook = jest.requireActual("./useFormUserRegister");

  return {
    _esModule: true,
    ...hook,
    useFormUserRegister: () => {
      return {
        ...hook.useFormUserRegister(),
        cidadesOptions: mockCidades,
        ufOptions: mockUfs,
      };
    },
  };
});

describe("<FormUserRegister />", () => {
  test("deve aprentar o form de cadastro de usuario", () => {
    renderComponent(<FormUserRegister submitForm={mockSubmit} />);
  });
});
