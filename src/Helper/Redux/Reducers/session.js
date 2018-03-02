import {
  UPDATE_SESSION,
  SHOW_LOADING_SCREEN,
  HIDE_LOADING_SCREEN,
  SHOW_NOTIFICATION,
  SET_SESSION_INITIALIZED
} from "../Actions";

const initState = {
  loading: true,
  initialized: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SESSION:
      return { ...state, ...action.session };
    case SHOW_LOADING_SCREEN:
      return { ...state, loading: true };
    case HIDE_LOADING_SCREEN:
      return { ...state, loading: false };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.notification,
        notificationIcon: action.icon
      };
    case SET_SESSION_INITIALIZED:
      return { ...state, initialized: action.initialized };
    default:
      return state;
  }
};
