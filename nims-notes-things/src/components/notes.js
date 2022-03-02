import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Pin from "../pin.jpeg";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  return (
    <div>
      {notes.map((note, index) => {
        return (
          <div>
            <Note>
              <PinImage src={Pin} alt=""></PinImage>
              <NoteNumber> {index + 1}</NoteNumber>
              <Header>
                <p>{note.name}</p>
                <p>{note.date}</p>
              </Header>
              <Content>{note.note}</Content>
            </Note>
          </div>
        );
      })}
    </div>
  );
}
export default Notes;

const Note = styled.div`
  flex-wrap: wrap;
  background-color: #e7f3fe;
  width: 200px;
  margin: 10px;
  padding: 20px;
  float: left;
  box-shadow:  0 0 5px green;
  }
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  font-style: italic;
  justify-content: space-between;
  margin-bottom: 10px;
  }
`;

const Content = styled.div`
  text-align: left;
  font-size: 17px;
  font-family: "Lucida Console", "Courier New", monospace;
  }
`;

const NoteNumber = styled.div`
  position: relative;
  right: 80px;
  bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const PinImage = styled.img`
  position: relative;
  left: 100px;
  bottom: 10px;
  height: 20px;
`;
