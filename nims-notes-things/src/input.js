import React from 'react';

const Input = (props) =>{

  const {type,value,placeholder,onChange,OnBlur} = props
  console.log(props);
  return(
    <input
      type={type}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      onBlur={OnBlur}
    />
    
  )
}
export default Input;
