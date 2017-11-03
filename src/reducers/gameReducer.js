import { 
  INCREASE_STREAK,
  RESET_STREAK,
  SET_CORRECT_NOTE,
  SET_CORRECT_REG,
  SET_CORRECT_ANSWER,
  SET_QUESTION,
  UPDATE_UNSWERED_NOTES,
  UPDATE_UNSWERED_REGS,
  RESET_STORE
} from '../actions';

const defaultState = {
  answer: null,
  answeredNotes: [],
  answeredRegs: [],
  availableNotes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  availableRegs: [1, 2, 3, 4, 5, 6, 7],
  correctNote: false,
  correctReg: false,
  correctAnswer: false,
  streak: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESET_STORE:
      state = defaultState;
    case INCREASE_STREAK:
      return Object.assign({}, state, {
         streak: state.streak + 1 
        });
    
    case RESET_STREAK:
      return Object.assign({}, state, {
         streak: 0 
        });
    
    case SET_CORRECT_NOTE:
      return Object.assign({}, state, { 
        correctNote : true 
      });

    case SET_CORRECT_REG:
      return Object.assign({}, state, { 
        correctReg : true 
      });

    case SET_CORRECT_ANSWER:
      return Object.assign({}, state, {
         correctAnswer : true 
        });
    
    case SET_QUESTION:
      return Object.assign({}, state, {
         answer: action.payload 
        });

    case UPDATE_UNSWERED_NOTES:
        return Object.assign({}, state, {
          answeredNotes: [...state.answeredNotes, action.payload]
        });

    case UPDATE_UNSWERED_REGS:
        return Object.assign({}, state, {
          answeredRegs: [...state.answeredRegs, action.payload]
        });

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