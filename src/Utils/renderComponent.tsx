import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { Theme } from "../Global/Theme";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { ContextProvider } from "../Context/Context";

export const renderComponent = (children: React.ReactElement) => {
  const history = createMemoryHistory();

  const view = render(
    <ThemeProvider theme={Theme}>
      <ContextProvider>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );

  return { history, view };
};
