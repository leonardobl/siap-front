import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IClienteDTO } from "../../../../Types/cliente";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormClientDetails } from "./useFormClientDetails";
import { maskCep, maskCpf, maskPhone } from "../../../../Utils/masks";

interface IFormClientDetail extends ComponentProps<"form"> {
  client: IClienteDTO;
}

export const FormClientDetail = ({ client, ...rest }: IFormClientDetail) => {
  const { navigate } = useFormClientDetails();

  return (
    <S.Form {...rest}>
      <div>
        <Input disabled label="Nome Completo" id="nome" value={client?.nome} />
      </div>
      <div>
        <Input disabled label="CPF" id="cpf" value={maskCpf(client?.cpf)} />
      </div>
      <div>
        <Input
          disabled
          label="Telefone"
          id="telefone"
          value={maskPhone(client?.telefone)}
        />
      </div>
      <div>
        <Input disabled label="E-mail" id="email" value={client?.email} />
      </div>
      <div>
        <Input
          disabled
          label="CEP"
          id="cep"
          value={maskCep(client?.endereco?.cep)}
        />
      </div>
      <div>
        <Input
          disabled
          label="Logradouro"
          id="logradouro"
          value={client?.endereco?.logradouro}
        />
      </div>
      <div>
        <Input
          disabled
          label="Número"
          id="numero"
          value={client?.endereco?.numero}
        />
      </div>
      <div>
        <Input
          disabled
          label="Complemento"
          id="complemento"
          value={client?.endereco?.complemento}
        />
      </div>
      <div>
        <Input
          disabled
          label="Bairro"
          id="bairro"
          value={client?.endereco?.bairro}
        />
      </div>

      <div>
        <Input disabled label="UF" id="uf" value={client?.endereco?.uf} />
      </div>
      <div>
        <Input
          label="Cidade"
          disabled
          value={client?.endereco?.cidade?.nome}
          id="cidade"
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
