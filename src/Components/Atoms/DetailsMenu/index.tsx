import React, { useState, ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { useDetailsMenu } from "./useButtonOptions";

interface IDetailsMenuProps extends ComponentProps<"details"> {
  title: string;
  children: React.JSX.Element;
}

export const DetailsMenu = (props: IDetailsMenuProps) => {
  const {} = useDetailsMenu();

  return (
    <S.Details {...props}>
      <summary>
        <div>
          <span className="summary-title">{props.title}</span>
        </div>
        <div className="summary-chevron-up">
          <img src="/assets/svg/icon-arrowUp-menu.svg" alt="seta para cima" />
        </div>
      </summary>

      <div className="summary-chevron-down">
        <img src="/assets/svg/icon-arrowDown-menu.svg" alt="seta para baixo" />
      </div>

      <div className="summary-content">{props.children}</div>
    </S.Details>
  );
};
