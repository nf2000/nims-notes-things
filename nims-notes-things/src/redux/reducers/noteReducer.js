import * as actions from "../actions/noteActionTypes";

export const initialState = {
  value: [],
  sorted: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      const notesArray = [...state.value];
      notesArray.push(action.value);
      return { ...state, value: notesArray };
    case actions.SET_SORTED:
      const setSorted = state.sorted;
      return { ...state, sorted: !setSorted };
    case actions.SET_DELETED:
      const deletedNote = action.value;
      // const deletedNoteState = state.value.map((note) =>
      //   note.id === deletedNote.id
      //     ? deletedNote.splice(note.id, 1)
      //     : alert("hello")
      const deletedNoteState = deletedNote.splice(
        deletedNote.findIndex((note) => note.id === action.value.id),
        1
      );
      return { ...state, value: deletedNoteState };
    default:
      return state;
  }
}
