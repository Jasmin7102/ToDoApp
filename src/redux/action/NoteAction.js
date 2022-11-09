export const ADD_NOTE = 'ADD_NOTE';
export const DEL_NOTE = 'DEL_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (text, type) => {
  return {
    type: ADD_NOTE,
    payload: {text, type},
  };
};

export const deleteNote = (text, type) => {
  return {
    type: DEL_NOTE,
    payload: {text, type},
  };
};

export const editNote = (text, type) => {
  return {
    type: EDIT_NOTE,
    payload: {text, type},
  };
};
