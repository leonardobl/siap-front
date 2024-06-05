import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";

export const FormClientRegister = () => {
  return (
    <S.Form>
      <div>
        <Input label="Nome Completo" required id="nome" />
      </div>
      <div>
        <Input label="CPF" required id="cpf" />
      </div>
      <div>
        <Input label="Telefone" id="telefone" />
      </div>
      <div>
        <Input label="E-mail" id="email" />
      </div>
      <div>
        <Input label="CEP" required id="cep" />
      </div>

      <div>
        <Input label="Logadrouro" required id="logradouro" />
      </div>
      <div>
        <Input label="Número" required id="numero" />
      </div>
      <div>
        <Input label="Complemento" id="complemento" />
      </div>
      <div>
        <Input label="Bairro" required id="bairro" />
      </div>

      <div>
        <SimpleSelect label="UF" required inputId="uf" />
      </div>
      <div>
        <SimpleSelect label="Cidade" required inputId="cidade" />
      </div>

      <div>
        <Input label="Senha" required id="senha" type="password" />
      </div>

      <div>
        <Input label="Confirmar Senha" required id="confirm" type="password" />
      </div>

      <div id="wrapper-buttons">
        <Button>Cancelar</Button>
        <Button variant="blue">Salvar</Button>
      </div>
    </S.Form>
  );
};
