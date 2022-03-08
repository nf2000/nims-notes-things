import * as noteActionTypes from "./noteActionTypes";

// object formDataCopy from forms
export const setNote = (value) => {
  return {
    type: noteActionTypes.SET_NOTE,
    value,
  };
};

export const setSorted = (value) => {
  return {
    type: noteActionTypes.SET_SORTED,
    value,
  };
};
