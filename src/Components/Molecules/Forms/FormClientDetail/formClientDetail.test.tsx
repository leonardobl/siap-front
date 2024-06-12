import { screen } from "@testing-library/react";
import { renderComponent } from "../../../../Utils/renderComponent";
import { FormClientDetail } from ".";
import { mockClientDetail } from "../../../../Mocks/mock-client";

describe("<FormClientDetail />", () => {
  test("Deve apresentar 11 os inputs", () => {
    renderComponent(<FormClientDetail client={mockClientDetail} />);

    const nameInput = screen.getByLabelText("Nome Completo");
    const cpfInput = screen.getByLabelText("CPF");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");
    const cepInput = screen.getByLabelText("CEP");
    const ruaInput = screen.getByLabelText("Logradouro");
    const numeroInput = screen.getByLabelText("Número");
    const complementoInput = screen.getByLabelText("Complemento");
    const bairroInput = screen.getByLabelText("Bairro");
    const ufInput = screen.getByLabelText("UF");
    const cidadeInput = screen.getByLabelText("Cidade");

    expect(nameInput).toBeVisible();
    expect(cpfInput).toBeVisible();
    expect(telefoneInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(cepInput).toBeVisible();
    expect(ruaInput).toBeVisible();
    expect(numeroInput).toBeVisible();
    expect(complementoInput).toBeVisible();
    expect(bairroInput).toBeVisible();
    expect(ufInput).toBeVisible();
    expect(cidadeInput).toBeVisible();
  });

  test("Deve exibir os dados preenchidos no input", () => {
    renderComponent(<FormClientDetail client={mockClientDetail} />);

    const nameInput = screen.getByLabelText("Nome Completo");
    const cpfInput = screen.getByLabelText("CPF");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");
    const cepInput = screen.getByLabelText("CEP");
    const ruaInput = screen.getByLabelText("Logradouro");
    const numeroInput = screen.getByLabelText("Número");
    const complementoInput = screen.getByLabelText("Complemento");
    const bairroInput = screen.getByLabelText("Bairro");
    const ufInput = screen.getByLabelText("UF");
    const cidadeInput = screen.getByLabelText("Cidade");

    expect(nameInput).toHaveValue(mockClientDetail.nome);
    expect(cpfInput).toHaveValue(mockClientDetail.cpf);
    expect(telefoneInput).toHaveValue(mockClientDetail.telefone);
    expect(emailInput).toHaveValue(mockClientDetail.email);
    expect(cepInput).toHaveValue(mockClientDetail.endereco.cep);
    expect(ruaInput).toHaveValue(mockClientDetail.endereco.logradouro);
    expect(numeroInput).toHaveValue(mockClientDetail.endereco.numero);
    expect(complementoInput).toHaveValue(mockClientDetail.endereco.complemento);
    expect(bairroInput).toHaveValue(mockClientDetail.endereco.bairro);
    expect(ufInput).toHaveValue(mockClientDetail.endereco.uf);
    expect(cidadeInput).toHaveValue(mockClientDetail.endereco.cidade.nome);
  });
});
