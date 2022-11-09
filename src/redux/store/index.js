import {combineReducers, legacy_createStore} from 'redux';
import NoteReducer from '../reducer/NoteReducer';

const rootReducer = combineReducers({
  NoteReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
