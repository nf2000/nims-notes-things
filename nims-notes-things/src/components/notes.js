import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Pin from "../pin.jpeg";
import Button from "./Button";
import { setDeleted, setSorted } from "../redux/actions/noteActions";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const sorted = useSelector((state) => {
    return state.noteReducer.sorted;
  });

  const dispatch = useDispatch();

  const sortNote = (e) => {
    e.preventDefault();
    dispatch(setSorted());
  };

  const deleteNote = (id) => {
    dispatch(setDeleted(id));
    toast.success("Note Deleted successfully :)", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const noteMap = () => {
    let sortedData = [...notes];
    if (sorted) {
      sortedData = sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
    return sortedData.map((note, index) => {
      return (
        <Note key={note.id}>
          <PinImage
            src={Pin}
            height={20}
            alt="Picture not available"
          ></PinImage>
          <NoteNumber>{index + 1}</NoteNumber>
          <Header>
            <p>{note.name}</p>
            <p>{note.date}</p>
          </Header>
          <Content>{note.note}</Content>
          <Button id={note.id} onClick={() => deleteNote(note.id)}>
            Delete
          </Button>
          <NavLink to={`/editNote/${note.id}`}>
            <Button id={note.id}>Edit</Button>
          </NavLink>
        </Note>
      );
    });
  };

  return (
    <div>
      {notes.length !== 0 ? (
        <Button onClick={sortNote}>{sorted ? "unsort" : "sort"}</Button>
      ) : (
        <p> There are no notes currently</p>
      )}
      {noteMap()}
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
  box-shadow: 0 0 5px green;
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
