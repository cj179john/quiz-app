const GET_ROUNDS = 'ROUNDS.GET_ALL';
const GET_ROUNDS_QUESTIONS_COUNT = 'ROUNDS.QUESTIONS.COUNT';
const GET_ROUNDS_SUCCESS = `${GET_ROUNDS}_SUCCESS`;
const GET_ROUNDS_QUESTIONS_COUNT_SUCCESS = `${GET_ROUNDS_QUESTIONS_COUNT}_SUCCESS`;
const GET_ROUNDS_QUESTIONS = 'ROUNDS.GET_QUESTION_ALL';
const GET_ROUNDS_QUESTIONS_SUCCESS = `${GET_ROUNDS_QUESTIONS}_SUCCESS`;

export function getRounds(activityId) {
  return {
    payload: {
      client: 'api',
      request: {
        url: `/activities/${activityId}/rounds`
      }
    },
    type: GET_ROUNDS
  };
}

export function getRoundQuestions(activityId, roundId) {
  return {
    payload: {
      client: 'api',
      request: {
        url: `/activities/${activityId}/rounds/${roundId}/questions`
      }
    },
    type: GET_ROUNDS_QUESTIONS
  };
}

export function isGetRoundsSuccess(action) {
  return action.type === GET_ROUNDS_SUCCESS;
}
export function isGetRoundQuestionsSuccess(action) {
  return action.type === GET_ROUNDS_QUESTIONS_SUCCESS;
}
export function isGetRoundQuestionsCountSuccess(action) {
  return action.type === GET_ROUNDS_QUESTIONS_COUNT_SUCCESS;
}