import React, { ComponentProps } from "react";
import { IContratoCompletoDTO } from "../../../../Types/contrato";

interface IContractsListProps extends ComponentProps<"div"> {
  contracts: IContratoCompletoDTO[];
}

export const ContractsList = ({ contracts, ...rest }: IContractsListProps) => {
  return <div {...rest}>ContractsList</div>;
};
