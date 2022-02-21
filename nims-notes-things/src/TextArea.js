import React from 'react';

const TextArea = (props) =>{

  const { name, value, placeholder, onChange, onBlur } = props;  
  return(
    <textarea
      name={name}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      onBlur={onBlur}
    />
    
  )
}
export default TextArea;