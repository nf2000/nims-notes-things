import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Note = ({ match }) => {
  const { noteId } = match.params;

  const note = useSelector((state) =>
    state.noteReducer.find((note) => note.id === noteId)
  );

  if (!note) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <p>{note.name}</p>
      <p>{note.date}</p>
      {note.note}
      <NavLink to={`/editNote/${note.id}`}>
        <Button id={note.id} onClick={console.log("hello")}>
          Edit
        </Button>
      </NavLink>
    </div>
  );
};

export default Note;
