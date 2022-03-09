import * as noteActionTypes from "./noteActionTypes";

// object formDataCopy from forms
export const setNote = (value) => {
  return {
    type: noteActionTypes.SET_NOTE,
    value,
  };
};

export const setSorted = () => {
  return {
    type: noteActionTypes.SET_SORTED,
  };
};

export const noteUpdated = (state, action) => {
  const { id, name, date, note } = action.payload;
  const existingNote = state.find((post) => note.id === id);
  if (existingNote) {
    existingNote.name = name;
    existingNote.date = date;
    existingNote.note = note;
  }
};
