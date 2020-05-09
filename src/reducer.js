import { combineReducers } from 'redux';
import {activities} from './components/Activities/reducer';
import {questionsOnly} from './components/Activities/WithQuestions/reducer';
import {withRounds} from './components/Activities/WithRounds/reducer';
export const reducer = combineReducers({
  activities,
  questionsOnly,
  withRounds,
});