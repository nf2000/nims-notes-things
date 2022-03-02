import * as noteActionTypes from "./noteActionTypes";

export const setNote = (value) => { // object formDataCopy from forms
  return {
    type: noteActionTypes.SET_NOTE,
    value,
  };
};
