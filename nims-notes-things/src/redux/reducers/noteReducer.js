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
    default:
      return state;
  }
}
