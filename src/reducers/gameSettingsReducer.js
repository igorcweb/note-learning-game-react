import { 
        TOGGLE_VISIBILITY, 
        SET_TREBLE, 
        SET_BASS,
        TOGGLE_CLEF, 
        SET_DIFFICULTY
      } from '../actions';

const defaultState = {
  isShowing: false,
  difficulty: 'easy',
  clef: 'treble',
  toggleClef: false
};

const GameSettings = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isShowing: !state.isShowing
      });
    case SET_TREBLE:
      return Object.assign({}, state, {
        clef: 'treble',
        toggleClef: false
      });
    case SET_BASS:
      return Object.assign({}, state, {
        clef: 'bass',
        toggleClef: false
      });
    case TOGGLE_CLEF:
      state.clef === 'treble' ? state.clef = 'bass' : state.clef = 'treble'; //take out
      return Object.assign({}, state, {
        toggleClef: true
      });
    case SET_DIFFICULTY:
      return Object.assign({}, state, {
        difficulty: action.payload
      });
    default:
      return state;
  }
};

export { GameSettings };
