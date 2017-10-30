import {
  SET_QUESTION,
  SET_CORRECT_ANSWER
} from './';

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

export { setCorrectAnswer, setQuestion }