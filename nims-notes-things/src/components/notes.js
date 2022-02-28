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
      {notes.map((n) => {
        return (
          <div>
            <Note>
              <img src={Pin} height={20} alt="" />
              <Header>
                <p>{n.name}</p>
                <p>{n.date}</p>
              </Header>
              <Content>{n.note}</Content>
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
  box-shadow:  0 0 5px blue;
  }
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  font-style: italic;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
  }
`;

const Content = styled.div`
  text-align: left;
  font-size: 17px;
  }
`;
