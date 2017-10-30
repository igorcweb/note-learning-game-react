import React from 'react';
import GameButtons from './GameButtons';
import Keyboard from './Keaboard';
import GameNotesContainer from './GameNotesContainer';
import GameSettingsContainer from '../containers/GameSettingsContainer';

const GameBody = () => (
  <div>
    <GameNotesContainer />
    <GameSettingsContainer />
    <GameButtons />
    <Keyboard />
  </div>
)

export default GameBody;

