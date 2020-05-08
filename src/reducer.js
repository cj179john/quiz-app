import { combineReducers } from 'redux';
import {activities} from './components/Activities/reducer';
import {questionsOnly} from './components/Activities/WithQuestions/reducer';

export const reducer = combineReducers({
  activities,
  questionsOnly
});