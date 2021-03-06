import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { name, type, value, placeholder, onChange, onBlur } = props;

  return (
    <InputStyle
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

const InputStyle = styled.input`
  width: 200px;
  height: 50px;
  background-color: #f8f8ff;
  border-color: #483d8b;
  border-radius: 0.5em;
  font-size: 15px;
  text-align: center;
  margin: 20px;
`;

export default Input;
