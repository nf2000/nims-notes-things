import React from 'react';

const Input = (props) =>{

  const { name, type, value, placeholder, onChange, onBlur } = props;  
  return(
    <input
      name={name}
      type={type}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      onBlur={onBlur}
    />
    
  )
}
export default Input;
