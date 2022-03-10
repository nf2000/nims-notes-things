import React, { useRef, useState } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../redux/actions/noteActions";
import { useParams } from "react-router";

const Form = (props, { match }) => {
  let { noteId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const existingNote = notes.find((note) => note.id === noteId);

  const dispatch = useDispatch();

  const emptyData = useRef({});

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    };
    console.log(newForm);
    setFormData(newForm);
  };

  const validateSubmit = () => {
    let isEmpty = true;
    Object.keys(formData).forEach((key) => {
      if (formData[key].length === 0) {
        handleOnBlur(key);
        return (isEmpty = false);
      }
    });
    return isEmpty;
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
      dispatch(setNote(formDataCopy));
      alert("Note has been created :) ");
    }
  };

  const handleOnBlur = (key) => {
    emptyData.current[key].innerHTML =
      formData[key] === "" ? `${key} required` : "";
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledDiv>
        <InnerForm>
          <ErrorMessage
            id="name"
            ref={(element) => (emptyData.current["name"] = element)}
          ></ErrorMessage>
          <Input
            name="name"
            type="text"
            placeholder="Please enter Your name"
            onChange={(e) => handleOnChange(e, "name")}
            onBlur={(e) => handleOnBlur("name")}
            value={noteId ? existingNote.name : formData.name}
          />
          <ErrorMessage
            id="date"
            ref={(element) => (emptyData.current["date"] = element)}
          ></ErrorMessage>
          <Input
            name="date"
            type="date"
            placeholder="Please enter the date"
            onChange={(e) => handleOnChange(e, "date")}
            onBlur={(e) => handleOnBlur("date")}
            value={noteId ? existingNote.date : formData.date}
          />
          <ErrorMessage
            id="note"
            ref={(element) => (emptyData.current["note"] = element)}
          ></ErrorMessage>
          <TextArea
            name="note"
            placeholder="Please enter Your Note"
            onChange={(e) => handleOnChange(e, "note")}
            onBlur={(e) => handleOnBlur("note")}
            value={noteId ? existingNote.note : formData.note}
          />
        </InnerForm>
      </StyledDiv>

      {noteId ? (
        <Button> update </Button>
      ) : (
        <Button type="submit" to="/notes">
          Submit
        </Button>
      )}
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
