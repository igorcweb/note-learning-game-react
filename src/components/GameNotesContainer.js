import React from 'react';
import { connect } from 'react-redux';

const GameNotes = ({ answer }) => {
  const noteImage = (answer) ? `${answer.note}${answer.reg}`.toUpperCase() : '';

  return (
    <div>
      <img className="notes" src={`/images/${noteImage}.jpg`} alt="note" />
    </div>
  );
}

function mapStateToProps({ Game }) {
  return {
    answer: Game.answer
  };
}

export default connect(mapStateToProps)(GameNotes);


