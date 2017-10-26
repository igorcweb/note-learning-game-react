import React from 'react';
import GameButtons from './GameButtons';
import Keyboard from './Keaboard';
import GameNotes from './GameNotes';
import GameSettingsContainer from '../containers/GameSettingsContainer';

const GameBody = () => (
  <div>
    <GameNotes />
    <GameSettingsContainer />
    <GameButtons />
    <Keyboard />
  </div>
)

export default GameBody;

