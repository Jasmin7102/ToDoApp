import {ADD_NOTE, DEL_NOTE, EDIT_NOTE} from '../action/NoteAction';

const INITIAL_STATE = {
  School: [],
  AllSchedule: [],
  GroceryList: [],
  WorkProjects: [],
  PersonalErrands: [],
};

const NoteReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_NOTE: {
      const updatedArray = JSON.parse(JSON.stringify(state[payload?.type]));
      updatedArray.push(payload?.text);
      return {...state, [payload.type]: updatedArray};
    }

    case DEL_NOTE: {
      const deleteArrayElement = JSON.parse(
        JSON.stringify(state[payload?.type]),
      );
      const index = deleteArrayElement.findIndex(item => item === payload.text);
      deleteArrayElement.splice(index, 1);
      return {...state, [payload.type]: deleteArrayElement};
    }

    case EDIT_NOTE: {
      var editArrayElement = JSON.parse(JSON.stringify(state[payload?.type]));
      const index = editArrayElement.findIndex(item => item === payload.text);
      editArrayElement.splice(index, 1, payload.text);
      return {...state, [payload.type]: editArrayElement};
    }

    default:
      return state;
  }
};

export default NoteReducer;
