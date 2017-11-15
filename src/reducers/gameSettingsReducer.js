import { 
        TOGGLE_VISIBILITY, 
        TOGGLE_CLEF, 
        SET_DIFFICULTY,
        SET_CLEF,
        SET_CLEF_SETTING
      } from '../actions';

const defaultState = {
  isShowing: false,
  difficulty: 'easy',
  clef: 'treble',
  clefSetting: 'treble'
};

const GameSettings = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isShowing: !state.isShowing
      });
    case SET_CLEF_SETTING:
      return Object.assign({}, state, {
        clefSetting: action.payload
      });
    case TOGGLE_CLEF:
      return Object.assign({}, state, {
        clef: (action.payload === 'treble') ? 'bass' : 'treble'
      });
    case SET_DIFFICULTY:
      return Object.assign({}, state, {
        difficulty: action.payload
      });
    case SET_CLEF:
      return Object.assign({}, state, {
        clef: action.payload
      });
    default:
      return state;
  }
};

export { GameSettings };
