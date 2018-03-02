/**
 * @providesModule actions
 */

export const UPDATE_SESSION = "UPDATE_SESSION";

export const updateSessionActionCreator = session => ({
  type: UPDATE_SESSION,
  session
});

export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export const updateQuestionsActionCreator = questions => ({
  type: UPDATE_QUESTIONS,
  questions
});

export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const updateUsernameActionCreator = username => ({
  type: UPDATE_USERNAME,
  username
});

export const UPDATE_SELECTED_UNIVERSITY = "UPDATE_SELECTED_UNIVERSITY ";

export const updateSelectedUniversityActionCreator = selectedUniversity => ({
  type: UPDATE_SELECTED_UNIVERSITY,
  selectedUniversity
});
