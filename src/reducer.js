import { combineReducers } from 'redux';
import {activities} from './components/Activities/reducer';
import {questionsOnly} from './components/Activities/AllQuestions/reducer';
import {withRounds} from './components/Activities/AllRounds/reducer';
export const reducer = combineReducers({
  activities,
  questionsOnly,
  withRounds,
});