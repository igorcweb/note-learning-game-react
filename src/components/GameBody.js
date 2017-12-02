import React from 'react';
import GameButtons from './GameButtons';
import Keyboard from './Keaboard';
import GameNotesContainer from './GameNotesContainer';
import GameSettingsContainer from '../containers/GameSettingsContainer';
import Footer from '../components/Footer';
const GameBody = () => (
  <div>
    <GameNotesContainer />
    <GameSettingsContainer />
    <GameButtons />
    <Keyboard />
    <Footer />
    
  </div>
);

export default GameBody;
