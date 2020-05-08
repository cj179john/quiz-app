import WithQuestions from './components/Activities/WithQuestions/WithQuestions';
import Home from './components/Home';

export const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: WithQuestions,
    path: '/activities/:id/questions'
  }
];
