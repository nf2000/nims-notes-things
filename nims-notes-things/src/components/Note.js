import React from "react";
import { useSelector } from "react-redux";

export const Note = ({ match }) => {
  const { noteId } = match.params;

  const note = useSelector((state) =>
    state.notes.find((note) => note.id === noteId)
  );

  if (!note) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{note.name}</h2>
        <p className="post-content">{note.content}</p>
      </article>
    </section>
  );
};

export default Note;
