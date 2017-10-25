import React from 'react';
import {GameInfo} from './GameNavButtons'

const GameHeader = () => (
  <header className="header">
    <h1 className="title">Note Learning Game</h1>
    <h1 className="streak">Streak:<span id="streak"> 0</span></h1>
    <GameInfo />
  </header>
);


export default GameHeader;