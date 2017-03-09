import { UPDATE_ACTION } from './actionTypes.js';

export const updateString = (aString) => {
  return {
    type: UPDATE_ACTION,
    payload: aString
  }
}
