import React from 'react';
import { Link } from 'react-router-dom';

export const GameInfo = () => (
  <div>
    <Link className="button button__info link" to="/info">Game Info</Link>
  </div>
);

export const BackToTheGame = () => {
  return (
    <div>
      <Link className="button button__back link" to="/">Back to the Game</Link>
    </div>
  );
}




