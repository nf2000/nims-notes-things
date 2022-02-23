import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "./Button";

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
    <StyledForm>
      <StyledDiv>
        <InnerForm>
          {empty.name && <ErrorMessage>Name field is required</ErrorMessage>}
          <Input
            name="name"
            placeholder="Please enter Your name"
            onChange={(e) => handleOnChange(e, "name")}
            onBlur={(e) => handleOnBlur(e.target.value, "name")}
            value={formData.name}
          />
          {empty.date && <ErrorMessage>Date field is required</ErrorMessage>}
          <Input
            name="date"
            type="date"
            placeholder="Please enter the date"
            onChange={(e) => handleOnChange(e, "date")}
            onBlur={(e) => handleOnBlur(e.target.value, "date")}
            value={formData.date}
          />
          {empty.note && <ErrorMessage>Note field is required</ErrorMessage>}
          <TextArea
            name="note"
            placeholder="Please enter Your Note"
            onChange={(e) => handleOnChange(e, "note")}
            onBlur={(e) => handleOnBlur(e.target.value, "note")}
            value={formData.note}
          />
        </InnerForm>
      </StyledDiv>
      <Button background="red" type="submit">
        submit
      </Button>
    </StyledForm>
  );
};
export default Form;

const StyledForm = styled.form``;

const StyledDiv = styled.div``;

const InnerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  position: relative;
  margin: 5px;
  background-color: white;
`;

const ErrorMessage = styled.p`
  color: red;
`;
