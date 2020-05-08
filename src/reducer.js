import { combineReducers } from 'redux';
import {isGetActivitiesSuccess} from './actions';
import {indexBy} from 'ramda';

const initialState = {
  allIds: [],
  byId: {},
  count: null
};

const activities = combineReducers({
  allIds,
  byId,
  count
});

const indexById = indexBy((x) => x.id);

function byId(state = initialState.byId, action) {
  if (isGetActivitiesSuccess(action)) {
    return indexById(action.payload.data);
  }
  return state;
}

function allIds(state = initialState.allIds, action) {
  return state;
}

function count(state = initialState.count, action) {
  return state;
}

export const reducer = combineReducers({
  activities
});