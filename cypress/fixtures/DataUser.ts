import { geradorDeCpf } from "../../src/Utils/geradorDeCpf";
const timeStamp = new Date().getTime();
export const DATA_USER_ADMIN = {
  login: "014.269.043-04",
  password: "STARcheck#123",
};

export const DATA_USER_CLIENT = {
  login: "118.724.500-32",
  password: "1234",
};

export const DATA_CLIENT = {
  nome: `Usuario de teste ${timeStamp}`,
  cpf: geradorDeCpf(),
  telefone: "869999999999",
  email: `${timeStamp}@teste.com.br`,
  cep: "64049700",
  numero: "2020",
  senha: "1234",
};
