import { UPDATE_QUESTIONS } from "../Actions";

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_QUESTIONS:
      return { ...state, questions: action.questions };
    default:
      return state;
  }
};
