import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KeyboardOneOctave from './KeyboardOneOctave';

const GameButtons = (props) => {
  let notes;

  if (props.correctAnswer.note && props.availableNotes.find(note => props.answer.note === note)) {

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
              // inform user answer was correct
              props.setCorrectAnswer();
              // reset the form
              // generate a new question
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

  let regs;

  if (props.correctAnswer.reg && props.availableRegs.find(reg => props.answer.reg === reg)) {

    regs = (
      <li className={`button`}>
        {props.answer.reg}
      </li>
    );
  } else {
    regs = props.availableRegs.map(reg => {
      const wasClicked = (props.answeredRegs.indexOf(reg) !== -1) ? 'was-clicked' : '';

      return (
        <li
          key={reg}
          className={`button ${wasClicked}`}
          onClick={() => {
            if (props.answer.reg === reg) {
              props.setCorrectAnswer('reg', reg);
            } else {
              props.markAnswer('reg', reg);
            }
          }}
        >
          {reg}
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
          {regs}
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
    correctAnswer: Game.correctAnswer,
    availableRegs: Game.availableRegs,
    answeredRegs: Game.answeredRegs
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    setCorrectAnswer(type, value) {
      dispatch({
        type: SET_CORRECT_ANSWER
      });
    }
  };
}

export default connect(mapStateToProps)(GameButtons);

