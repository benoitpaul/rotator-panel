import { combineReducers } from 'redux';
import { UPDATE_ACTION } from './actionTypes.js';

function aString(state = '', action) {
  switch (action.type) {
    case UPDATE_ACTION:
      return action.payload;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  aString
});

export default allReducers;