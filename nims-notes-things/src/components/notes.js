import React from "react";
import { useSelector } from "react-redux";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  return (
    <div style={{ background: "grey", margin: 10 }}>
      {notes.map((n) => {
        return (
          <>
            <p>{n.name}</p>
            <p>{n.date}</p>
            <p>{n.note}</p>
          </>
        );
      })}
    </div>
  );
}

export default Notes;

