import AllQuestions from './components/Activities/AllQuestions/AllQuestions';
import Home from './components/Home';
import Activity from './components/Activities/AllRounds/components/Activity';

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
    component: Activity,
    path: '/activities/:id/rounds'
  }
];
