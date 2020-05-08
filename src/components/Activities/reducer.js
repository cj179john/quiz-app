import { combineReducers } from 'redux';
import {indexBy} from 'ramda';
import {isGetActivitiesSuccess} from './actions';

const initialState = {
  byId: {}
};

export const activities = combineReducers({
  byId
});

const indexById = indexBy((x) => x.id);

function byId(state = initialState.byId, action) {
  if (isGetActivitiesSuccess(action)) {
    return indexById(action.payload.data);
  }
  return state;
}
