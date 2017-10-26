import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KeyboardOneOctave from './KeyboardOneOctave';

const GameButtons = (props) => {
  let notes;

  if (props.correctAnswer && props.availableNotes.find(note => props.answer.note === note)) {

    notes = (
      <li className={`button`}>
        {props.answer.note.toUpperCase()}
      </li>
    );
  } else {
    notes = props.availableNotes.map(note => {
      const wasClicked = (props.answeredNotes.indexOf(note) !== -1) ? 'was-clicked' : '';

      return (
        <li
          key={note}
          className={`button ${wasClicked}`}
          onClick={() => {
            if (props.answer.note === note) {
              props.setCorrectAnswer('note', note);
            } else {
              props.markAnswer('note', note);
            }
          }}
        >
          {note.toUpperCase()}
        </li>
      );
    });
  }

  return (
    <div>
      <div className="button-container">
        <h1 className="task-text">Pick a Note:</h1>
        <ul className="note-buttons">
          {notes}
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
}

const mapStateToProps = ({ Game }) => {
  return {
    answer: Game.answer,
    availableNotes: Game.availableNotes,
    answeredNotes: Game.answeredNotes,
    correctAnswer: Game.correctAnswer
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    setCorrectAnswer(type, value) {
      dispatch({
        type: 'SET_CORRECT_ANSWER'
      });
    }
  };
}

export default connect(mapStateToProps)(GameButtons);

