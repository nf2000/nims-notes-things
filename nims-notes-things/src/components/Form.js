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

  const [sortType, setSorted] = useState({ asc: "", desc: ""})

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
      if (formData[key].length === 0) {
        handleOnBlur(key);
        return (isValidated = true);
      }
    });
    return isValidated;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValidated = validateSubmit();
    if (!isValidated) {
      const uniqueId = uuidv4();
      const formDataCopy = {
        ...formData,
        id: uniqueId,
      };
      dispatch(setNote(formDataCopy));
    }
  };

  const handleOnBlur = (key) => {
    if (formData[key] === "") {
      document.getElementById(key).innerHTML = key + " required";
    } else {
      document.getElementById(key).innerHTML = "";
    }
  };

  const sorted = notes.sort((a,b) => {
    const dateA = (`${a.date}`.valueOf());
    const dateB = (`${b.date}`).valueOf();
    if(dateA > dateB){
      console.log("dateA" + dateA + " Date B " + dateB);
      return 1; // return -1 here for DESC order
    }
    return -1 // return 1 here for DESC Order
  });
  const myData = [].concat(this.state.data)
    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    .map((item, i) => 
        <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
    );
  

  console.log("THIS IS SORT" + sorted)

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledDiv>

        <InnerForm>
          {notes.length === 0 ? <p> Please Enter your Note</p> : null}
          {<ErrorMessage id="name"></ErrorMessage>}
          <Input
            name="name"
            placeholder="Please enter Your name"
            onChange={(e) => handleOnChange(e, "name")}
            onBlur={(e) => handleOnBlur("name")}
            value={formData.name}
          />
          {<ErrorMessage id="date"> </ErrorMessage>}
          <Input
            name="date"
            type="date"
            placeholder="Please enter the date"
            onChange={(e) => handleOnChange(e, "date")}
            onBlur={(e) => handleOnBlur("date")}
            value={formData.date}
          />
          {<ErrorMessage id="note"> </ErrorMessage>}
          <TextArea
            name="note"
            placeholder="Please enter Your Note"
            onChange={(e) => handleOnChange(e, "note")}
            onBlur={(e) => handleOnBlur("note")}
            value={formData.note}
          />
        </InnerForm>
      </StyledDiv>
      <Button background="blue" type="submit">
        Submit
      </Button>
      <Button background="blue" onClick={sorted}>
        Sort
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
