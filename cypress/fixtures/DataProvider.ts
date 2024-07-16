import { geradorDeCnpj } from "../../src/Utils/geradorDeCnpj";
import { geradorDeCpf } from "../../src/Utils/geradorDeCpf";
import { gerarInscricaoMunicipal } from "../../src/Utils/gerarIncricaoMunicipal";
import { gerarInscricaoEstadual } from "../../src/Utils/gerarInscricaoEstadual";

const timestamp = new Date().getTime();

export const DATA_PROVIDER = {
  nome: `Provider ${timestamp}`,
  razao: `Razão ${timestamp}`,
  cnpj: geradorDeCnpj(),
  incricaoEstadual: gerarInscricaoEstadual(),
  incricaoMunicipal: gerarInscricaoMunicipal(),
  email: `${timestamp}@teste.com.br`,
  telefone: "86999999999",
  cep: "64049700",

  profissional: {
    nome: `Professional ${timestamp}`,
    cpf: geradorDeCpf(),
    numConselho: `${timestamp}`,
    email: `${timestamp}@empresa.com`,
    telefone: "86999999999",
  },
};
