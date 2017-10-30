import { INCREASE_STREAK, RESET_STREAK } from './';

const increaseStreak = () => {
  return {
    type: INCREASE_STREAK
  };
}
const resetStreak = () => {
  return {
    type: RESET_STREAK
  };
}

export { increaseStreak, resetStreak }