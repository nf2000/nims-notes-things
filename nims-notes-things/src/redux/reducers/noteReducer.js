import { setSorted } from "../actions/noteActions";
import * as actions from "../actions/noteActionTypes";

export const initialState = {
  //whatever passed in - state arrary -> passed inside export function
  value: [], sorted : false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      const notesArray = [...state.value];
      notesArray.push(action.value);
      return { ...state, value: notesArray };
    case actions.SET_SORTED:
      const set_sorted = state.sorted
      return { ...state, sorted: !set_sorted };
    default:
      return state;
  }
}
