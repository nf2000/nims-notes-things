import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setNote } from "../redux/actions/noteActions";

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
    valid: false,
  });

  const [empty, setFormEmpty] = useState({
    name: false,
    date: false,
    note: false,
  });

  const dispatch = useDispatch();

  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newForm);
  };

  const validateSubmit = () => {
    let isValidated = false;
    Object.keys(formData).forEach((key) => {
      if (formData[key].length >= 1) {
        setFormData((previousState) => {
          return {
            ...previousState,
            formData, valid: true, 
          };

        });
        return isValidated = true;
      }
    });
    console.log(formData.valid);
    return isValidated;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValidated = validateSubmit();
    if (isValidated) {
      const uniqueId = uuidv4();
      const formDataCopy = {
        ...formData,
        id: uniqueId,
      };
      const notesCopy = [...notes];
      notesCopy.push(formDataCopy);
      dispatch(setNote(notesCopy));
    }
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
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledDiv>
        <InnerForm>
          {notes.length === 0 ? <p> Please Enter your Note</p> : null}
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
      <Button background="blue" type="submit">
        Submit
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
