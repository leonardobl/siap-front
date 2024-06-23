import React, { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { ISelectOptions } from "../../../Types/inputs";

const options = [
  {
    value: "Teste1",
    label: "Teste1",
  },
  {
    value: "Teste2",
    label: "Teste2",
  },
  {
    value: "Teste3",
    label: "Teste3",
  },
  {
    value: "Teste4",
    label: "Teste4",
  },
];

export const useUsers = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [teste, setTeste] = useState<ISelectOptions[]>([] as ISelectOptions[]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const { append, remove } = useFieldArray({
    control,
    name: "",
  });

  return {
    filterOpen,
    setFilterOpen,
    isMobile,
    openModal,
    setOpenModal,
    options,

    teste,
    setTeste,

    control,
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    Controller,
    append,
    remove,
  };
};
