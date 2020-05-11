import { combineReducers } from 'redux';
import {indexBy} from 'ramda';
import {isGetActivitiesSuccess, isAddProcessedQuestion} from './actions';

const initialState = {
  byId: {},
  processed: [],
};

export const activities = combineReducers({
  byId,
  processed,
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
      initialState.processed.push(action.question);
      return initialState.processed;
    }
  }

  return state;
}
