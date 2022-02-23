import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  border-radius: 5000px;
  border: 2px solid palevioletred;
  background: ${(props) => props.background};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export default Button;
