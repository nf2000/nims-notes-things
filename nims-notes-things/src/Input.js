import React from "react";
// import styled from "styled-components";


const Input = (props) => {
  const { name, type, value, placeholder, onChange, onBlur } = props;

  return (
    // <InputField>
    <input 
      style = {
        {
          width: '200px',
          height: '50px',
          borderColor: "CornflowerBlue"
         }
      }
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  // </InputField>
  );
};
export default Input;

// const InputField = styled.div`
// width: '200px', 
// height: '50px'
// `;