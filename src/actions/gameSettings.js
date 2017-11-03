import { 
  SET_DIFFICULTY,
  SET_TREBLE,
  SET_BASS,
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

const setTreble = () => {
  return {
    type: SET_TREBLE
  }
}

const setBass = () => {
  return {
    type: SET_BASS
  }
}

const toggleClef = () => {
  return {
    type: TOGGLE_CLEF
  }
}



export { setDifficulty, setTreble, setBass, toggleClef, resetStore }