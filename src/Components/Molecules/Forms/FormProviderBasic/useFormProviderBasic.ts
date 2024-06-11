import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IPrestadorForm } from "../../../../Types/prestador";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCep, maskCnpj, maskPhone } from "../../../../Utils/masks";
import { mockCidades } from "../../../../Mocks/mock-cidades";
import { mockUfs } from "../../../../Mocks/mock-ufs";

const TipoOptions = [{ value: "Tipo1", label: "Tipo1" }];

const schemaCidade = z.object({
  nome: z.string().min(1, { message: "Campo obrigatorio" }),
});

const schemaEndereco = z.object({
  bairro: z.string().min(1, { message: "Campo obrigatorio" }),
  cep: z.string().min(9, { message: "Cep invalido" }),
  cidade: schemaCidade,
  complemento: z.string().optional().or(z.literal("")),
  logradouro: z.string().min(1, { message: "Campo obrigatorio" }),
  numero: z.string().optional(),
  uf: z.string().min(1, { message: "Campo obrigario" }),
});

const schemaForm = z.object({
  cnpj: z
    .string({ message: "Campo obrigatorio" })
    .min(18, { message: "CNPJ invalido" }),
  email: z
    .string()
    .email({ message: "Email invalido" })
    .optional()
    .or(z.literal("")),
  endereco: schemaEndereco,
  inscEstadual: z.string().optional().or(z.literal("")),
  inscMunicipal: z.string().optional().or(z.literal("")),
  nome: z.string().min(5, { message: "campo obrigatorio" }),
  razaoSocial: z.string().min(1, { message: "campo obrigatorio" }),
  telefone: z.string().min(14, { message: "Telefone invalido" }),
  tipoNome: z.string().min(1, { message: "campo obrigatorio" }),
});

export const useFormProviderBasic = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<IPrestadorForm>({
    defaultValues: {
      cnpj: "",
      email: "",
      inscEstadual: "",
      inscMunicipal: "",
      nome: "",
      razaoSocial: "",
      telefone: "",
      tipoNome: "",
      endereco: {
        bairro: "",
        cep: "",
        cidade: {
          nome: "",
        },
        complemento: "",
        logradouro: "",
        numero: "",
        uf: "",
      },
    },
    resolver: zodResolver(schemaForm),
  });

  useEffect(() => {
    setValue("endereco.cep", maskCep(watch("endereco.cep")));
  }, [watch("endereco.cep")]);

  useEffect(() => {
    setValue("cnpj", maskCnpj(watch("cnpj")));
  }, [watch("cnpj")]);

  useEffect(() => {
    setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  return {
    Controller,
    control,
    errors,
    register,
    handleSubmit,
    TipoOptions,
    mockUfs,
    mockCidades,
  };
};
