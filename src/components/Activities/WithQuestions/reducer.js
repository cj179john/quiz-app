import { combineReducers } from 'redux';
import {isGetQuestionsSuccess} from './actions';
import {indexBy, map} from 'ramda';

const initialState = {
  allIds: [],
  byId: {},
  count: null
};

export const questionsOnly = combineReducers({
  allIds,
  byId,
  count
});

const indexById = indexBy((x) => x.id);
const getId = map((x) => x.id);

function byId(state = initialState.byId, action) {
  if (isGetQuestionsSuccess(action)) {
    return indexById(action.payload.data);
  }
  return state;
}

function allIds(state = initialState.allIds, action) {
  if (isGetQuestionsSuccess(action)) {
    return getId(action.payload.data);
  }
  return state;
}

function count(state = initialState.count, action) {
  return state;
}
