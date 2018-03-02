/**
 * @providesModule reducer
 */

import { combineReducers } from "redux";

import session from "./session";
import config from "./config";
import questions from "./questions";

export default combineReducers({
  session,
  config,
  questions
});
