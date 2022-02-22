import React from "react";
import styled from "styled-components";

const TextArea = (props) => {
  const { name, value, placeholder, onChange, onBlur } = props;

  return (
    <TextAreaStyle
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

const TextAreaStyle = styled.input`
  width: 200px;
  height: 100px;
  border-color: #483D8B;
`;
export default TextArea;
