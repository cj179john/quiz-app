import WithQuestions from './components/Activities/WithQuestions/WithQuestions';
import Home from './components/Home';
import WithRounds from './components/Activities/WithRounds/WithRounds';

export const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: WithQuestions,
    path: '/activities/:id/questions'
  },
  {
    component: WithRounds,
    path: '/activities/:id/rounds'
  }
];
