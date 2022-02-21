import TextArea from './TextArea';
import Input from './Input';

import React, { useState } from 'react';

const Form = (props) =>{

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    nite: ''
  });

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    }
   setFormData(newForm)
  }

  const handleOnBlurNote = e => {
    if(formData.name === ''){
      alert("This field is required")
    }
  }
  const handleOnBlurDate = e => {
    if(formData.name === ''){
      alert("This field is required")
    }
  }
  
  return (
    <div className="App">
      <Input
        name= "name"
        placeholder= "Please enter Your name"
        onChange={(e)=> handleOnChange(e, "name")}
        onBlur={handleOnBlurNote}
        value={formData.name}
      />
      <h5>Name: {formData.name}</h5>

      <Input
        name= "date"
        placeholder= "Please enter the date"
        onChange={(e)=> handleOnChange(e, "date")}
        onBlur={handleOnBlurDate}
        value={formData.date}
      />
      <h5>Date: {formData.date}</h5>

      <TextArea
        name= "note"
        placeholder="Please Enter Your Note"
        onChange={(e)=> handleOnChange(e, "note")}
        onBlur={handleOnBlurNote}
        value={formData.note}
      />
    <h5>Note: {formData.note}</h5>
    </div>
  );
}
export default Form;
