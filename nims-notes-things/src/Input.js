import React from "react";
import styled from "styled-components";


const Input = (props) => {
  const { name, type, value, placeholder, onChange, onBlur } = props;

  return (
    <InputField
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

const InputField = styled(Input)`
width: '200px', 
height: '50px',
backgroundColor: '20px;
`;

export default Input;

