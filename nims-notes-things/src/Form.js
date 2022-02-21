import React, { useState } from "react";
import TextArea from "./TextArea";
import Input from "./Input";

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  const [empty, setFormEmpty] = useState({
    name: false,
    date: false,
    note: false,
  });

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newForm);
  };

  const handleOnBlur = (e, key) => {
    empty.map((data) => {
      return <h2>key.data</h2>;
    });
  };

  // const handleOnBlurName = e => {
  //   if(formData.name === ''){
  //     alert("This field is required")
  //   }
  // }
  // const handleOnBlurDate = e => {
  //   if(formData.name === ''){
  //     alert("This field is required")
  //   }
  // }
  // const handleOnBlurNote = (e,key) => {
  //   if(formData.name === ''){
  //     alert("This field is required")
  //   }
  // }
  return (
    <div className="App">
      <Input
        name="name"
        placeholder="Please enter Your name"
        onChange={(e) => handleOnChange(e, "name")}
        onBlur={(e) => handleOnBlur(e.target.value, "name")}
        value={formData.name}
      />
      <h5>Name: {formData.name}</h5>

      <Input
        name="date"
        placeholder="Please enter the date"
        onChange={(e) => handleOnChange(e, "date")}
        onBlur={(e) => handleOnBlur(e.target.value, "date")}
        value={formData.date}
      />
      <h5>Date: {formData.date}</h5>

      <TextArea
        name="note"
        placeholder="Please Enter Your Note"
        onChange={(e) => handleOnChange(e, "note")}
        onBlur={(e) => handleOnBlur(e.target.value, "note")}
        value={formData.note}
      />
      <h5>Note: {formData.note}</h5>
    </div>
  );
};
export default Form;
