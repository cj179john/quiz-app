import { combineReducers } from 'redux';
import {isGetQuestionsSuccess} from './actions';
import {indexBy, map} from 'ramda';

const initialState = {
  allOrders: [],
  byOrder: {},
  count: null
};

export const questionsOnly = combineReducers({
  allOrders,
  byOrder,
  count
});

const indexByOrder = indexBy((x) => x.order);
const getOrder = map((x) => x.order);

function byOrder(state = initialState.byOrder, action) {
  if (isGetQuestionsSuccess(action)) {
    return indexByOrder(action.payload.data);
  }
  return state;
}

function allOrders(state = initialState.allOrders, action) {
  if (isGetQuestionsSuccess(action)) {
    return getOrder(action.payload.data);
  }
  return state;
}

function count(state = initialState.count, action) {
  return state;
}
