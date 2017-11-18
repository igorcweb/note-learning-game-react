import {
  SET_QUESTION,
  RESET_QUESTION,
  SET_CORRECT_NOTE,
  SET_CORRECT_REG,
  SET_CORRECT_ANSWER,
  UPDATE_UNSWERED_NOTES,
  UPDATE_UNSWERED_REGS,
  SET_WRONG_KEY
} from './';

const setCorrectNote = () => {
  return {
    type: SET_CORRECT_NOTE
  };
}

const setCorrectReg = () => {
  return {
    type: SET_CORRECT_REG
  };
}

const setCorrectAnswer = () => {
  return {
    type: SET_CORRECT_ANSWER
  };
}


const setQuestion = (payload) => {
  return {
    type: SET_QUESTION,
    payload
  };
}

const resetQuestion = (payload) => {
  return {
    type: RESET_QUESTION,
    payload
  }
}

const updateAnsweredNotes = (payload) => {
  return {
    type: UPDATE_UNSWERED_NOTES,
    payload
  }
}

const updateAnsweredRegs = (payload) => {
  return {
    type: UPDATE_UNSWERED_REGS,
    payload
  }
}

const setWrongKey = () => {
  return {
    type: SET_WRONG_KEY
  }
}

export { 
  setCorrectNote, 
  setCorrectReg, 
  setCorrectAnswer, 
  setQuestion,
  resetQuestion, 
  updateAnsweredNotes, 
  updateAnsweredRegs,
  setWrongKey
 }