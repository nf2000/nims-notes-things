import React from "react";
import styled from "styled-components";
import Theme from "./Theme";

const Button = (props) => {
  return (
    <Theme>
      <ButtonStyle {...props}>
        {props.children}
      </ButtonStyle>
    </Theme>
  );
};

const ButtonStyle = styled.button`
  border-radius: 200px;
  border: ${(props) => props.theme.button.border};
  background: ${(props) => props.theme.button.background};
  margin: ${(props) => props.theme.button.margin};
  padding: ${(props) => props.theme.button.padding};
`;

export default Button;
