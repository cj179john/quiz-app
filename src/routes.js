import Question from './components/Question';
import Home from './components/Home';

export const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: Question,
    path: '/questions'
  }
];
