import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

import { setUpdatedNote } from "../redux/actions/noteActions";

const EditNoteFrom = (props) => {
  const { noteId } = useParams();

  console.log(noteId + "note id");

  // const [formExisitingNote, setFormExisitingNote] = useState({
  //   name: existingNote.name,
  //   date: existingNote.date,
  //   note: existingNote.note,
  // });

  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const existingNote = notes.find((note) => note.id === noteId);

  const singleNote = useSelector((state) => {
    console.log(state.noteReducer.value);
    return state.noteReducer.value;
  });

  console.log(singleNote + " note name ");

  const [name, setName] = useState(singleNote.name);
  // const [date, setData] = useState(singleNote.date);
  // const [note, setNote] = useState(singleNote.note);

  const dispatch = useDispatch();
  const history = useNavigate();

  const onTitleChanged = (e) => setName(e.target.value);

  const onSavePostClicked = () => {
    if (name) {
      dispatch(setUpdatedNote({ id: noteId }));
      history.push(`/EditNote/${noteId}`);
    }
  };

  return (
    <div>
      {JSON.stringify(existingNote)}
      <button type="button" onClick={onSavePostClicked}>
        edit
      </button>
    </div>
  );
};

export default EditNoteFrom;
