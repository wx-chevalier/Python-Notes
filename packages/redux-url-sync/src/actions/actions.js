export const TOGGLE = 'TOGGLE';
export const SET_TEXT = 'SET_TEXT';

/**
 * Action Creators
 */
export function toggle(item) {
  return { type: TOGGLE, item };
}

export function setText(text) {
  return { type: SET_TEXT, text };
}
