import { TOGGLE, SET_TEXT } from '../actions/actions';

const initialState = {
  one: false,
  two: false,
  three: false,
  text: ''
};

export function urlReduxSync(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, {
        [action.item]: !state[action.item]
      });

    case SET_TEXT:
      return Object.assign({}, state, {
        text: action.text
      });

    case 'TEST':
      console.log('TEST');
      return state;

    default:
      return state;
  }
}
