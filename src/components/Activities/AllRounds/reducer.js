import { combineReducers } from 'redux';
import {isGetRoundQuestionsSuccess, isGetRoundsSuccess, isGetRoundQuestionsCountSuccess} from './actions';
import {indexBy, map} from 'ramda';

const initialState = {
  allOrders: [],
  byOrder: {},
  count: null,
  roundByOrder: {},
  roundOrders: []
};

export const withRounds = combineReducers({
  allOrders,
  byOrder,
  count,
  roundByOrder,
  roundOrders,
});

const indexByOrder = indexBy((x) => x.order);
const getOrder = map((x) => x.order);

function roundByOrder(state = initialState.roundByOrder, action) {
  if (isGetRoundsSuccess(action)) {
    return indexByOrder(action.payload.data);
  }
  return state;
}

function roundOrders(state = initialState.roundOrders, action) {
  if (isGetRoundsSuccess(action)) {
    return getOrder(action.payload.data);
  }
  return state;
}

function byOrder(state = initialState.byOrder, action) {
  if (isGetRoundQuestionsSuccess(action)) {
    return indexByOrder(action.payload.data);
  }
  return state;
}

function allOrders(state = initialState.allOrders, action) {
  if (isGetRoundQuestionsSuccess(action)) {
    return getOrder(action.payload.data);
  }
  return state;
}

function count(state = initialState.count, action) {
  if (isGetRoundQuestionsCountSuccess(action)) {
    return action.payload.data.count;
  }
  return state;
}
