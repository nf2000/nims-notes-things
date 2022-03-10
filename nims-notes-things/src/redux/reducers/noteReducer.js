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
    case actions.SET_UPDATE_NOTE:
      const { noteId, name } = action.payload;
      const existingNote = state.find((note) => note.id === noteId);
      if (existingNote) {
        existingNote.name = name;
        alert("hello");
      }
      return { ...state, value: existingNote };
    default:
      return state;
  }
}
