import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormPayment } from "../../Molecules/Forms/FormPayment";

export const PaymentTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Pagamento">
      <FormPayment submitForm={(e) => console.log(e)} />
    </LayoutTemplate>
  );
};
