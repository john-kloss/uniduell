import { UPDATE_USERNAME, UPDATE_SELECTED_UNIVERSITY } from "../Actions";

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.username };
    case UPDATE_SELECTED_UNIVERSITY:
      return { ...state, selectedUniversity: action.selectedUniversity };
    default:
      return state;
  }
};
