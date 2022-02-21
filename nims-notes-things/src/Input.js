import React from 'react';

const Input = (props) =>{

  const { type, value, placeholder, onChange, onBlur } = props;  
  return(
    <input
      type={type}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      onBlur={onBlur}
    />
    
  )
}
export default Input;
