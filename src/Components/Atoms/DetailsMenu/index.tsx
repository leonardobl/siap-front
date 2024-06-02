import React from "react";
import * as S from "./styles";
import { useDetailsMenu } from "./useButtonOptions";
import { IDetailsMenuProps } from "../../../Types/detailsMenu";

export const DetailsMenu = (props: IDetailsMenuProps) => {
  const {} = useDetailsMenu();

  return (
    <S.Details {...props}>
      <summary>
        <div>
          <span className="summary-title">{props.title}</span>
        </div>
        <div className="summary-chevron">
          <img
            id="summary-chevron-up"
            src="/assets/svg/icon-arrowUp-menu.svg"
            alt="seta para cima"
          />

          <img
            id="summary-chevron-down"
            src="/assets/svg/icon-arrowDown-menu.svg"
            alt="seta para baixo"
          />
        </div>
      </summary>

      <div className="summary-content">{props.children}</div>
    </S.Details>
  );
};
