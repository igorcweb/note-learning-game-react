import { TOGGLE_VISIBILITY } from '../actions';

const defaultState = {
  isShowing: false,
  difficulty: 'easy',
  clef: 'treble'
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isShowing: !state.isShowing
      });
    default:
      return state;
  }
};
