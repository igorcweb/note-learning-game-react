import { 
  SET_DIFFICULTY,
  SET_CLEF,
  TOGGLE_CLEF, 
  RESET_STORE
} from './';

const resetStore = () => {
  return {
    type: RESET_STORE
  }
}

const setDifficulty = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty
  }
}

const setClef = (clef) => {
  return {
    type: SET_CLEF,
    payload: clef
  }
}



const toggleClef = () => {
  return {
    type: TOGGLE_CLEF
  }
}



export { setDifficulty, setClef, toggleClef, resetStore }