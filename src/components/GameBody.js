import React from 'react';
import GameButtons from './GameButtons';
import Keyboard from './Keaboard';
import GameNotes from './GameNotes';
import Mode from '../containers/Mode';

const GameBody = () => (
  <div>
    <GameNotes />
    <Mode />
    <GameButtons />
    <Keyboard />
  </div>
)

export default GameBody;

