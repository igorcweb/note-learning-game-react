import React from 'react';
import { Link } from 'react-router-dom';

const GameInfo = () => (
  <div>
    <Link className="button button__info link" to="/info">Game Info</Link>
  </div>
);

const BackToTheGame = () => (
  <div>
    <Link className="" to="/">Back to the Game</Link>
  </div>
);


export {GameInfo, BackToTheGame};