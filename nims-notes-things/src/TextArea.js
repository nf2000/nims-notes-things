import React from "react";

const TextArea = (props) => {
  const { name, value, placeholder, onChange, onBlur } = props;

  return (
    <textarea
      style = {
        {
          width: '200px',
          height: '100px',
          borderColor: "CornflowerBlue"
         }
      }
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};
export default TextArea;
