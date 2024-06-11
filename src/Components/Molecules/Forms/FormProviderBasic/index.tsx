import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";

export const FormProviderBasic = () => {
  return (
    <S.Form>
      <div>
        <Input id="Nome" label="Nome" required />
      </div>
      <div>
        <Input id="social" label="Razão Social" required />
      </div>
      <div>
        <Input id="CNPJ" label="CNPJ" required />
      </div>
      <div>
        <Input id="municipal" label="Inscrição Municipal" />
      </div>
      <div>
        <Input id="estadual" label="Inscrição Estadual" />
      </div>
      <div>
        <Input label="E-mail" id="email" />
      </div>
      <div>
        <SimpleSelect inputId="tipo" label="Tipo" required />
      </div>
      <div>
        <Input label="Telefone" required id="telefone" />
      </div>
      <div>
        <Input label="CEP" required id="cep" />
      </div>
      <div>
        <Input label="Logradouro" required id="logradouro" />
      </div>
      <div>
        <Input label="Número" id="numero" />
      </div>
      <div>
        <Input label="Complemento" id="complemento" />
      </div>
      <div>
        <Input id="bairro" label="Bairro" required />
      </div>
      <div>
        <SimpleSelect label="UF" required inputId="uf" />
      </div>
      <div>
        <SimpleSelect label="Cidade" required inputId="cidade" />
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
