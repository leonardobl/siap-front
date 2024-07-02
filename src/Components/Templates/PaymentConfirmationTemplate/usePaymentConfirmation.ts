import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePaymentConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return { navigate, id };
};
