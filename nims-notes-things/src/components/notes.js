import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  return (
    <div>
      {notes.map((n) => {
        return (
          <div>
            <Note>
              <pa>{n.name}</pa>
              <p>{n.date}</p>
              <p>{n.note}</p>
            </Note>
          </div>
        );
      })}
    </div>
  );
}
export default Notes;

const Note = styled.div`
  display: grid;
  flex-wrap: wrap;
  background-color: #e7f3fe;
  width: 200px;
  margin: 10px;
  padding: 20px;
  float: left;
  }
`;
