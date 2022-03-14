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

export const setDeleted = (id) => {
  return {
    type: noteActionTypes.SET_DELETED,
    id,
  };
};
export const setUpdatedNote = (value) => {
  return {
    type: noteActionTypes.SET_UPDATE_NOTE,
    value,
  };
};
