import dayjs from "dayjs";
import { geraValorMonetario } from "../../src/Utils/geraValor";

export const DATA_CONTRACT = {
  dataInicio: dayjs().date(),
  dataFinal: dayjs().add(10, "days").date(),
  valor: geraValorMonetario(),
};
