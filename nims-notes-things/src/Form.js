import React, { useState } from "react";
import styled from "styled-components";
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
  
  return (
    <form >
      <div>
        <InnerForm>
          <div className="inputField">
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
          </div>
          <h5>Date: {formData.date}</h5>

          <TextArea
            name="note"
            placeholder="Please enter Your Note"
            onChange={(e) => handleOnChange(e, "note")}
            onBlur={(e) => handleOnBlur(e.target.value, "note")}
            value={formData.note}
          />
          <h5>Note: {formData.note}</h5>

          <Button type="submit">submit</Button>
        </InnerForm>
      </div>
    </form>
  );
};
export default Form;

const InnerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  position: relative;
  margin: 20px;
  backgroundColor: pink;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
