import uuid from 'uuid';

import { KEY, LIFECYCLE } from './constants';

export interface FsaAction {
  type: string;
  payload: any;
  meta: any;
}

export function isPromise(obj: any) {
  return !!obj && typeof obj.then === 'function';
}

function handleEventHook(meta: object, hook: string, ...args: any) {
  if (meta && meta[hook] && typeof meta[hook] === 'function') {
    // we want to make sure that an "eventHook" doesn't cause a dispatch to fail, so we wrap it
    // with a try..catch. In dev, we `console.error` which will result in a redbox.
    try {
      meta[hook](...args);
    } catch (e) {
      console.error(e);
    }
  }
}

function handlePromise(dispatch: Function, getState: Function, action: FsaAction) {
  const { type, payload, meta } = action;

  // it is sometimes useful to be able to track the actions and associated promise lifecycle with a
  // sort of unique identifier. This is that.
  const transactionId = uuid.v4();
  const startPayload = payload;

  dispatch({
    type,
    payload,
    meta: {
      ...meta,
      [KEY.LIFECYCLE]: LIFECYCLE.START,
      [KEY.TRANSACTION]: transactionId
    }
  });
  handleEventHook(meta, 'onStart', payload, getState);

  const success = (data: any) => {
    dispatch({
      type,
      payload: data,
      meta: {
        ...meta,
        startPayload,
        [KEY.LIFECYCLE]: LIFECYCLE.SUCCESS,
        [KEY.TRANSACTION]: transactionId
      }
    });
    handleEventHook(meta, 'onSuccess', data, getState);
    handleEventHook(meta, 'onFinish', true, getState);
    return { payload: data };
  };

  const failure = (error: Error) => {
    dispatch({
      type,
      payload: error,
      error: true,
      meta: {
        ...meta,
        startPayload,
        [KEY.LIFECYCLE]: LIFECYCLE.FAILURE,
        [KEY.TRANSACTION]: transactionId
      }
    });

    if (
      (process && process.env && process.env.NODE_ENV === 'development') ||
      process.env.NODE_ENV === 'dev'
    ) {
      console.error(error);
    }

    handleEventHook(meta, 'onFailure', error, getState);
    handleEventHook(meta, 'onFinish', false, getState);
    return { error: true, payload: error };
  };

  // return the promise. In this case, when users dispatch an action with a promise
  // payload, they can `.then` it, since it will return a promise.
  // NOTE(lmr):
  // it's debatable whether or not we want `.then(success, failure)`
  // versus `.then(success).catch(failure)`
  return payload.then(success, failure);
}

export const middleware = (store: any) => (next: Function) => (action: FsaAction) => {
  // a common use case for redux-thunk is to conditionally dispatch an action. By allowing for null,
  // we satisfy this use case without people having to use redux-thunk.
  if (action == null) {
    return null;
  }

  // this is the convention-based promise middleware. Ideally, all "async actions" would go through
  // this pathway.
  if (isPromise(action.payload) && (!action.meta || !action.meta[KEY.LIFECYCLE])) {
    return handlePromise(store.dispatch, store.getState, action);
  }

  // this is the "vanilla redux" pathway. These are plain old actions that will get sent to reducers
  return next(action);
};
