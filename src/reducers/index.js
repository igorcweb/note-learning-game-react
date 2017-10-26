import {combineReducers} from 'redux';
import GameSettings from './gameSettingsReducer';
import Game from './gameReducer';

export default combineReducers({
  Game,
  GameSettings
});
