import React from 'react';
import KeyboardOneOctave from './KeyboardOneOctave';

const GameButtons = () => (
  <div>
    <div className="button-container">
      <h1 className="task-text">Pick a Note:</h1>
      <ul className="note-buttons">
        <li className="button">C</li>
        <li className="button">D</li>
        <li className="button">E</li>
        <li className="button">F</li>
        <li className="button">G</li>
        <li className="button">A</li>
        <li className="button">B</li>
      </ul>
      <KeyboardOneOctave />
      <h1 className="task-text">Pick a Register:</h1>
      <ul className="register-buttons">
        <li className="button">1</li>
        <li className="button">2</li>
        <li className="button">3</li>
        <li className="button">4</li>
        <li className="button">5</li>
        <li className="button">6</li>
        <li className="button">7</li>
      </ul>
      </div> 
  </div>
);

export default GameButtons;

