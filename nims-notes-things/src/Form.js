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

  const handleOnBlur = (value, key) => {
    setFormEmpty((previousState) => {
      return {
        ...previousState,
        [key]: value === "",
      };
    });
  };

  return (
    <form onSubmit>
      <div>
        {empty.name && <p>This field is required</p>}
        <Input
          name="name"
          placeholder="Please enter Your name"
          onChange={(e) => handleOnChange(e, "name")}
          onBlur={(e) => handleOnBlur(e.target.value, "name")}
          value={formData.name}
        />
        <h5>Name: {formData.name}</h5>
        {empty.date && <p>This field is required</p>}
        <Input
          name="date"
          placeholder="Please enter the date"
          onChange={(e) => handleOnChange(e, "date")}
          onBlur={(e) => handleOnBlur(e.target.value, "date")}
          value={formData.date}
        />
        <h5>Date: {formData.date}</h5>
        {empty.note && <p>This field is required</p>}
        <TextArea
          name="note"
          placeholder="Please enter Your Note"
          onChange={(e) => handleOnChange(e, "note")}
          onBlur={(e) => handleOnBlur(e.target.value, "note")}
          value={formData.note}
        />
        <h5>Note: {formData.note}</h5>
      </div>
      <button type="submit" />
    </form>
  );
};
export default Form;
