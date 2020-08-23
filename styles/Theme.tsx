import * as React from "react";
import { ThemeProvider } from "styled-components";
import { light } from "./themeTypes";
import { GlobalStyle } from "./GlobalStyle";

const Theme: React.FunctionComponent<{ children: any }> = ({ children }) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
