const GET_ACTIVITIES = 'ACTIVITIES.GET_ALL';
const GET_ACTIVITIES_QUESTIONS_COUNT = 'ACTIVITIES.QUESTIONS.COUNT';
const GET_ACTIVITIES_SUCCESS = `${GET_ACTIVITIES}_SUCCESS`;
const GET_ACTIVITIES_QUESTIONS_COUNT_SUCCESS = `${GET_ACTIVITIES_QUESTIONS_COUNT}_SUCCESS`;
const ADD_PROCESSED_QUESTION = 'ACTIVITY.ADD.PROCESSED.QUESTION';

export function getActivities() {
  return {
    payload: {
      client: 'api',
      request: {
        url: '/activities'
      }
    },
    type: GET_ACTIVITIES
  };
}

export function addProcessedQuestion(question) {
  return {
    question,
    type: ADD_PROCESSED_QUESTION
  }
}

export function isAddProcessedQuestion(action) {
  return action.type === ADD_PROCESSED_QUESTION;
}

export function isGetActivitiesSuccess(action) {
  return action.type === GET_ACTIVITIES_SUCCESS;
}

export function isGetActivitiesQuestionsCountSuccess(action) {
  return action.type === GET_ACTIVITIES_QUESTIONS_COUNT_SUCCESS;
}

