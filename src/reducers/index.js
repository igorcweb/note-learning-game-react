import { combineReducers } from 'redux';
import { GameSettings } from './gameSettingsReducer';
import Game from './gameReducer';

export default combineReducers({
  Game,
  GameSettings
});

// const rootReducer = (state, action) => {
//   if (action.type === 'RESET_STORE') {
//     state = undefined
//   }
//   return appReducer(state, action)
// }

// export default rootReducer;


