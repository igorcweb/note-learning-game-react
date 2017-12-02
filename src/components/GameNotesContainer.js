import React from 'react';
import { connect } from 'react-redux';

const GameNotes = ({ answer, clef }) => {  
  let noteImage = (answer) ? `${answer.note}${answer.reg}`.toUpperCase() : '';

  if (clef === 'bass') {
    noteImage = `b${noteImage}`;
  }

  return (
    <div className="content">
      <img className="notes" src={`/images/${noteImage}.jpg`} alt="note" />
    </div>
  );
}

function mapStateToProps({ Game, GameSettings }) {
  return {
    answer: Game.answer,
    clef: GameSettings.clef
  };
}

export default connect(mapStateToProps)(GameNotes);


