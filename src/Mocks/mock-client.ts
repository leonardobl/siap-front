import { v4 } from "uuid";
import { IClienteDTO } from "../Types/cliente";

export const mockClientList = [
  { nome: "Camilla Santos", cpf: "018.895.983.13", uuid: v4() },
  { nome: "Camilla Santos Alcântara", cpf: "018.555.983.13", uuid: v4() },
  { nome: "Camilla Alcântara", cpf: "018.895.983.00", uuid: v4() },
  { nome: "Leonardo Lima", cpf: "018.895.945.88", uuid: v4() },
];

export const mockClientDetail: IClienteDTO = {
  nome: "Leonardo Lima",
  cpf: "517.660.080-38",
  createdAt: new Date().toLocaleDateString(),
  email: "email@teste.com.br",
  telefone: "(86) 99523-3237",
  uuid: v4(),
  uuidUsuario: v4(),
  endereco: {
    bairro: "Ininga",
    cep: "64049-700",
    cidade: {
      nome: "Teresina",
      uf: "PI",
    },
    complemento: "",
    logradouro: "Rua de teste",
    numero: "2020",
    uf: "PI",
  },
};
