import React from 'react';

const TextArea = (props) =>{

  const { value, placeholder, onChange, onBlur } = props;  
  return(
    <textarea
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      onBlur={onBlur}
    />
    
  )
}
export default TextArea;