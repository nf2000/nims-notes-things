import React from "react";
import { ThemeProvider } from "styled-components";

const colors = {
  powderWhite: "#FFFDF9",
  persianGreen: "#06B49A",
  lightBlue: "#AFDBD2",
  onyx: "#36313D",
};

const font = ["sans-serif", "Roboto"];

const fontSizes = {
  small: "1em",
  medium: "2em",
  large: "3em",
};

const theme = {
  button: {
    border: "2px solid #FFFDF9",
    background: colors.persianGreen,
    margin: "0.5em 1em",
    padding: "0.25em 1em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
