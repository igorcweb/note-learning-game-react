import { 
  INCREASE_STREAK,
  RESET_STREAK
} from '../actions';

const defaultState = {
  streak: 0,
  answer: null,
  availableNotes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  availableRegisters: ['1', '2'],
  answeredNotes: [],
  answeredRegisters: [],
  correctAnswer: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_STREAK:
      return Object.assign({}, state, { streak: state.streak + 1 });
    
    case RESET_STREAK:
      return Object.assign({}, state, { streak: 0 });
    
    case 'SET_CORRECT_ANSWER':
      return Object.assign({}, state, { correctAnswer : true });
    
    case 'RESET_QUESTION':
      return Object.assign({}, state, {
        answeredNotes: [],
        answeredRegisters: [],
        correctAnswer: false
      });
    
      default:
      return state;
  }
};