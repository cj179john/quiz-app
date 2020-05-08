import {path} from 'ramda';

export const axiosResponseCallback =
  (store) =>
    (next) =>
      (action) => {
        if (isSuccessAction(action) && hasPreviousActionSuccessCallback(action)) {
          store.dispatch(action.meta.previousAction.onSuccess(action.payload.data));
        }
        next(action);
      };

const hasPreviousActionSuccessCallback = (action) => !!path(['meta', 'previousAction', 'onSuccess'], action);
const isSuccessAction = (action) => action.type && action.type.indexOf('_SUCCESS') > -1;
