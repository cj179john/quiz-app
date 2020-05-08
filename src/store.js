import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {axiosMiddleware} from './middlewares/axios';
import {axiosResponseCallback} from './middlewares/axios-response-cb';
import {reducer} from './reducer';

// Redux Developer Tools Integration (requires extension to be installed
const composeEnhancers =
  typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true
    }) : compose;

/*
 * The order here is important
 * The Axios middleware sends its success/fail actions to the *next* middleware in the chain.
 * The Axios middleware must therefore come before any middleware expecting to process a success/fail action.
 */
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(axiosMiddleware, axiosResponseCallback, thunk))
);