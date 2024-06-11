import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormProviderBasic } from ".";
import { mockCidades } from "../../../../Mocks/mock-cidades";
import { mockUfs } from "../../../../Mocks/mock-ufs";
import userEvent from "@testing-library/user-event";

const TipoOptions = [{ value: "Tipo1", label: "Tipo1" }];

const dataForm = {
  nome: "Leonardo",
  razaoSocial: "dfsfsd",
  cnpj: "15.936.704/0001-48",
  inscMunicipal: "456465",
  inscEstadual: "4546546",
  email: "leo@uol.com.br",
  endereco: {
    cep: "64049-700",
    logradouro: "rua de teste",
    numero: "2020",
    bairro: "bairro teste",
    complemento: "",
    uf: mockUfs[0].value,
    cidade: { nome: mockCidades[0].value },
  },
  tipoNome: TipoOptions[0].value,
  telefone: "(86) 99999-9999",
};

const mockSubmt = jest.fn();

jest.mock("./useFormProviderBasic", () => {
  const hook = jest.requireActual("./useFormProviderBasic");

  return {
    _esModule: true,
    ...hook,
    useFormProviderBasic: () => {
      return {
        ...hook.useFormProviderBasic(),
        cidadesOptions: mockCidades,
        ufOptions: mockUfs,
        TipoOptions,
      };
    },
  };
});

describe("<FormProviderBasic />", () => {
  test("Deve apresentar 15 inputs e 1 botão", () => {
    renderComponent(<FormProviderBasic submitForm={mockSubmt} />);
    const nameInput = screen.getByLabelText("Nome*");
    const razaoInput = screen.getByLabelText("Razão Social*");
    const cnpjInput = screen.getByLabelText("CNPJ*");
    const municipalInput = screen.getByLabelText("Inscrição Municipal");
    const estadualInput = screen.getByLabelText("Inscrição Estadual");
    const emailInput = screen.getByLabelText("E-mail");
    const tipoInput = screen.getByLabelText("Tipo*");
    const telefoneInput = screen.getByLabelText("Telefone*");
    const cepInput = screen.getByLabelText("CEP*");
    const ruaInput = screen.getByLabelText("Logradouro*");
    const numeroInput = screen.getByLabelText("Número");
    const complementoInput = screen.getByLabelText("Complemento");
    const bairroInput = screen.getByLabelText("Bairro*");
    const ufInput = screen.getByLabelText("UF*");
    const cidadeInput = screen.getByLabelText("Cidade*");
    const buttom = screen.getByRole("button", { name: "Avançar" });

    expect(nameInput).toBeVisible();
    expect(razaoInput).toBeVisible();
    expect(cnpjInput).toBeVisible();
    expect(municipalInput).toBeVisible();
    expect(estadualInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(tipoInput).toBeVisible();
    expect(telefoneInput).toBeVisible();
    expect(cepInput).toBeVisible();
    expect(ruaInput).toBeVisible();
    expect(numeroInput).toBeVisible();
    expect(complementoInput).toBeVisible();
    expect(bairroInput).toBeVisible();
    expect(ufInput).toBeVisible();
    expect(cidadeInput).toBeVisible();
    expect(buttom).toBeVisible();
  });

  test("Deve apresentar mensagens de erro ao submeter o form sem preencher", async () => {
    renderComponent(<FormProviderBasic submitForm={mockSubmt} />);

    const buttom = screen.getByRole("button", { name: "Avançar" });
    await fireEvent.submit(buttom);

    const erroMessages = await screen.findAllByTestId("erro-message");

    expect(erroMessages).toHaveLength(10);
  });

  test("Deve submeter mensagens de erro ao submeter o form sem preencher", async () => {
    renderComponent(<FormProviderBasic submitForm={mockSubmt} />);
    const nameInput = screen.getByLabelText("Nome*");
    const razaoInput = screen.getByLabelText("Razão Social*");
    const cnpjInput = screen.getByLabelText("CNPJ*");
    const municipalInput = screen.getByLabelText("Inscrição Municipal");
    const estadualInput = screen.getByLabelText("Inscrição Estadual");
    const emailInput = screen.getByLabelText("E-mail");
    const tipoInput = screen.getByLabelText("Tipo*");
    const telefoneInput = screen.getByLabelText("Telefone*");
    const cepInput = screen.getByLabelText("CEP*");
    const ruaInput = screen.getByLabelText("Logradouro*");
    const numeroInput = screen.getByLabelText("Número");
    const bairroInput = screen.getByLabelText("Bairro*");
    const ufInput = screen.getByLabelText("UF*");
    const cidadeInput = screen.getByLabelText("Cidade*");
    const buttom = screen.getByRole("button", { name: "Avançar" });

    await userEvent.type(nameInput, dataForm.nome);
    await userEvent.type(razaoInput, dataForm.razaoSocial);
    await userEvent.type(cnpjInput, dataForm.cnpj);
    await userEvent.type(municipalInput, dataForm.inscMunicipal);
    await userEvent.type(estadualInput, dataForm.inscEstadual);
    await userEvent.type(emailInput, dataForm.email);

    await userEvent.click(tipoInput);
    await userEvent.click(await screen.findByText(dataForm.tipoNome));

    await userEvent.type(telefoneInput, dataForm.telefone);
    await userEvent.type(cepInput, dataForm.endereco.cep);
    await userEvent.type(ruaInput, dataForm.endereco.logradouro);
    await userEvent.type(numeroInput, dataForm.endereco.numero);
    await userEvent.type(bairroInput, dataForm.endereco.bairro);

    await userEvent.click(ufInput);
    await userEvent.click(await screen.findByText(dataForm.endereco.uf));

    await userEvent.click(cidadeInput);
    await userEvent.click(
      await screen.findByText(dataForm.endereco.cidade.nome)
    );

    await fireEvent.submit(buttom);

    await waitFor(async () => {
      expect(mockSubmt).toHaveBeenCalledWith(dataForm, expect.anything());
    });
  });
});
