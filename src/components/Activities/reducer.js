import { combineReducers } from 'redux';
import {indexBy} from 'ramda';
import {isGetActivitiesSuccess, isAddProcessedQuestion, isGetActivitiesQuestionsCountSuccess} from './actions';

const initialState = {
  byId: {},
  processed: {},
  count: null,
};

export const activities = combineReducers({
  byId,
  processed,
  count,
});

const indexById = indexBy((x) => x.id);

function byId(state = initialState.byId, action) {
  if (isGetActivitiesSuccess(action)) {
    return indexById(action.payload.data);
  }
  return state;
}

function processed(state = initialState.processed, action) {
  if (isAddProcessedQuestion(action)) {
    if (action.question) {
      state[action.question.id] = action.question;
      return state;
    }
  }
  return state;
}

function count(state = initialState.count, action) {
  if (isGetActivitiesQuestionsCountSuccess(action)) {
    return action.payload.data.count;
  }
  return state;
}