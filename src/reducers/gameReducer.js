// import { easyTreble } from '../functions/GenerateTreble';

import { 
  INCREASE_STREAK,
  RESET_STREAK,
  SET_CORRECT_ANSWER,
  SET_QUESTION
} from '../actions';

const defaultState = {
  answer: null,
  answeredNotes: [''],
  answeredRegs: [],
  availableNotes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  availableRegs: [1, 2, 3, 4, 5, 6, 7],
  correctAnswer: false,
  streak: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_STREAK:
      return Object.assign({}, state, { streak: state.streak + 1 });
    
    case RESET_STREAK:
      return Object.assign({}, state, { streak: 0 });
    
    case SET_CORRECT_ANSWER:
      return Object.assign({}, state, { correctAnswer : true });
    
    case SET_QUESTION:
      return Object.assign({}, state, { answer: action.payload });

    case 'ADD_USER_ANSWER':
      // figure out if it was a note or a reg and update the appropriate array
      return state; // change me
    
    case 'RESET_QUESTION':
      return Object.assign({}, state, {
        answeredNotes: [],
        answeredRegs: [],
        correctAnswer: false
      });
    
      default:
      return state;
  }
};