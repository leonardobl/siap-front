import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormPayment } from "../../Molecules/Forms/FormPayment";
import { usePayment } from "./usePayment";

export const PaymentTemplate = () => {
  const { handleSubmit } = usePayment();

  return (
    <LayoutTemplate titleHeader="Pagamento">
      <FormPayment submitForm={handleSubmit} />
    </LayoutTemplate>
  );
};
