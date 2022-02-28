import * as noteActionTypes from "./noteActionTypes";

export const setNote = (value) => {
  return {
    type: noteActionTypes.SET_NOTE,
    value,
  };
};
