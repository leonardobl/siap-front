import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IClienteDTO } from "../../../../Types/cliente";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { useFormClientDetails } from "./useFormClientDetails";

interface IFormClientDetail extends ComponentProps<"form"> {
  // client: IClienteDTO
  client: IClienteDTO;
}

export const FormClientDetail = () => {
  const { navigate } = useFormClientDetails();

  return (
    <S.Form>
      <div>
        <Input label="Nome Completo" id="nome" />
      </div>
      <div>
        <Input label="CPF" id="cpf" maxLength={14} />
      </div>
      <div>
        <Input label="Telefone" id="telefone" maxLength={15} />
      </div>
      <div>
        <Input label="E-mail" id="email" />
      </div>
      <div>
        <Input label="CEP" id="cep" maxLength={9} />
      </div>
      <div>
        <Input label="Logradouro" id="logradouro" />
      </div>
      <div>
        <Input label="Número" id="numero" />
      </div>
      <div>
        <Input label="Complemento" id="complemento" />
      </div>
      <div>
        <Input label="Bairro" id="bairro" />
      </div>

      <div>
        <SimpleSelect
          label="UF"
          inputId="uf"
          // value={ufOptions.find((i) => i.value === value) || null}
        />
      </div>
      <div>
        <SimpleSelect
          label="Cidade"
          // value={cidadesOptions.find((i) => i.value === value) || null}
          inputId="cidade"
        />
      </div>

      <div id="wrapper-buttons">
        <Button type="button" onClick={() => navigate("/clientes")}>
          Voltar
        </Button>
      </div>
    </S.Form>
  );
};
