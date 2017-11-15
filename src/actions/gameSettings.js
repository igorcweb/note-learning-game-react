import { 
  SET_DIFFICULTY,
  SET_CLEF,
  TOGGLE_CLEF, 
  RESET_STORE,
  SET_CLEF_SETTING
} from './';

export const resetStore = () => {
  return {
    type: RESET_STORE
  }
}

export const setDifficulty = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty
  }
}

export const setClef = (clef) => {
  return {
    type: SET_CLEF,
    payload: clef
  }
}

export const setClefSetting = (clef) => {
  return {
    type: SET_CLEF_SETTING,
    payload: clef
  }
}

export const toggleClef = () => {
  return {
    type: TOGGLE_CLEF
  }
}
