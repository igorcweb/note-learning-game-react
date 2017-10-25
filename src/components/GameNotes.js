import React from 'react';
import {easyTreble} from '../functions/GenerateTreble';

const GameNotes = () => (
  <div>
    <img className="notes" src={easyTreble()} alt="note" />
  </div>
);

export default GameNotes;