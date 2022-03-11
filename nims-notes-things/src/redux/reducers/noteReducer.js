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
      const noteUpdated = action.value;
      const updatedNoteState = state.value.map((note) => {
        if (note.id !== noteUpdated.id) return note;
        return {
          ...note,
          name: noteUpdated.name,
          date: noteUpdated.date,
          note: noteUpdated.note,
        };
      });
      return {
        ...state,
        value: updatedNoteState,
      };
    default:
      return state;
  }
}
