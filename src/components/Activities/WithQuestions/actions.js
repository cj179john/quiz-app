const GET_QUESTIONS = 'QUESTIONS.GET_ALL';
const GET_QUESTIONS_COUNT = 'QUESTIONS.QUESTIONS.COUNT';
const GET_QUESTIONS_SUCCESS = `${GET_QUESTIONS}_SUCCESS`;
const GET_QUESTIONS_COUNT_SUCCESS = `${GET_QUESTIONS_COUNT}_SUCCESS`;

export function getQuestions(activityId) {
  return {
    payload: {
      client: 'api',
      request: {
        url: `/activities/${activityId}/questions`
      }
    },
    type: GET_QUESTIONS
  };
}

export function isGetQuestionsSuccess(action) {
  return action.type === GET_QUESTIONS_SUCCESS;
}

export function isGetQuestionsCountSuccess(action) {
  return action.type === GET_QUESTIONS_COUNT_SUCCESS;
}