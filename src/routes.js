import AllQuestions from './components/Activities/AllQuestions/AllQuestions';
import Home from './components/Home';
import AllRounds from './components/Activities/AllRounds/AllRounds';

export const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: AllQuestions,
    path: '/activities/:id/questions'
  },
  {
    component: AllRounds,
    path: '/activities/:id/rounds'
  }
];
