import React from "react";
import styled from "styled-components";

const Button = (props) => {

  return (
    <ButtonStyle
    {...props}
    />
  );
};

const ButtonStyle = styled.button`
background: transparent;
border-radius: 5000px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;
`;

export default Button;
