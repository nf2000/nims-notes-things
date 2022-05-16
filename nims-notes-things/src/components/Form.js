import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setNote, setUpdatedNote } from "../redux/actions/noteActions";
import { useNavigate, useParams } from "react-router";
import postIt from "../post_it.png";

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

  useEffect(() => {
    const existingNote = notes.find((note) => note.id === noteId);
    if (!existingNote) return;
    setFormData(existingNote);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyData = useRef({});

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    };
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
      toast.success("Note Created Successfully :)", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/notes", { replace: true });
    }
  };

  const handleOnUpdate = (event) => {
    if (noteId) {
      event.preventDefault();
      const isValidated = validateSubmit();
      if (isValidated) {
        const formDataCopy = {
          ...formData,
        };
        dispatch(setUpdatedNote(formDataCopy));
        toast.success("Note is Updated Succesfully :)", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/notes", { replace: true });
      }
    }
  };

  const handleOnBlur = (key) => {
    emptyData.current[key].innerHTML =
      formData[key] === "" ? `${key} required` : "";
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={noteId ? handleOnUpdate : handleOnSubmit}>
        <PostItImage src={postIt} height={20} alt="Picture not available">
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
              value={formData.name}
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
              value={formData.date}
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
              value={formData.note}
            />
          </InnerForm>
          {noteId ? (
            <Button onClick={handleOnUpdate}>Update</Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </PostItImage>
      </StyledForm>
    </StyledDiv>
  );
};
export default Form;

const StyledForm = styled.form``;

const StyledDiv = styled.div``;

const PostItImage = styled.div`
  position: relative;
  left: 100px;
  bottom: 10px;
  height: 1000px;
`;

const InnerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  position: relative;
  margin: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
`;
