import * as actions from "../actions/noteActionTypes";

export const initialState = {
  value: [], //whatever passed in - state arrary -> passed inside export function
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      return { ...state, value: action.value };
    default:
      return state;
  }
}
