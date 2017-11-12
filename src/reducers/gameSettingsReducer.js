import { 
        TOGGLE_VISIBILITY, 
        TOGGLE_CLEF, 
        SET_DIFFICULTY,
        SET_CLEF
      } from '../actions';

const defaultState = {
  isShowing: false,
  difficulty: 'easy',
  clef: 'treble',
  both: 'treble'
};

const GameSettings = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isShowing: !state.isShowing
      });

    case TOGGLE_CLEF:
      state.clef === 'treble' ? state.clef = 'bass' : state.clef = 'treble'; //take out
      return Object.assign({}, state, {
        clef: action.payload
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
