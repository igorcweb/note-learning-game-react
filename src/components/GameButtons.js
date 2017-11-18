import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KeyboardOneOctave from './KeyboardOneOctave';
import {
  setCorrectNote,
  setCorrectReg,
  setCorrectAnswer,
  setQuestion,
  resetQuestion,
  updateAnsweredNotes,
  updateAnsweredRegs,
} from '../actions/correctAnswer';
import {
  increaseStreak,
  resetStreak
} from '../actions/streak';
import { resetStore, setClefSetting, setClef } from '../actions/gameSettings';
import { generateTreble, generateBass } from '../helpers/gameHelpers';

const GameButtons = (props) => {
  console.log(props.correctNote);
  const selectedClass = props.correctNote ? 'selected' : '';
  let notes;
  let regs;
  if (props.correctNote && props.availableNotes.find(note => props.answer.note === note)) {

    notes = (
      <li className="button">
        {props.answer.note.toUpperCase()} 
      </li>
    );
  } else {
    notes = props.availableNotes.map(note => {
      const wasClicked = (props.answeredNotes.indexOf(note) !== -1) ? 'was-clicked' : '';
      return (
        <li
          key={note}
          className={`button ${wasClicked} ${selectedClass}`}
          onClick={(event) => {
            if (props.answer.note === note) {
              props.setCorrectNote();
              if(props.correctReg) {
                props.setCorrectAnswer();
                props.increaseStreak();
                setTimeout(() => {
                  props.resetStore(); 
                  if (props.clef === 'treble') {
                    props.setQuestion(
                      generateTreble(props.availableNotes, props.difficulty)
                    );
                  } else {
                    props.setQuestion(
                      generateBass(props.availableNotes, props.difficulty)
                    );
                  }
                }, 2000);
              }  
            } else {
              props.updateAnsweredNotes(note);
              props.resetStreak();
            }
          }
        }
        >
          {note.toUpperCase()}
        </li>
      );
    });
  }
  if (props.correctReg && props.availableRegs.find(reg => props.answer.reg === reg)) {
    regs = (
      <li className={`button`}>
        {props.answer.reg}
      </li>
    );
  } else {
    regs = props.availableRegs.map(reg => {
      const wasClicked = (props.answeredRegs.indexOf(reg) !== -1) ? 'was-clicked' : '';
      
      let selectedClass;
      
      return (
        <li
          key={reg}
          className={`button ${wasClicked} ${selectedClass}`}
          onClick={() => {
            if (props.answer.reg === reg) {
              props.setCorrectReg();
              if(props.correctNote) {
                props.setCorrectAnswer();
                props.increaseStreak();
                setTimeout(() => {
                  props.resetStore();
                  if(props.clefSetting === 'both') {
                    switch (props.clef) {
                      case 'treble':
                        props.setClef('bass');
                        props.setQuestion(
                          generateBass(props.availableNotes, props.difficulty)
                        );
                        break;
                      case 'bass':
                        props.setClef('treble');
                        props.setQuestion(
                          generateTreble(props.availableNotes, props.difficulty)
                        );
                        break;
                    }
                  } else if (props.clefSetting === 'treble') {
                    props.setQuestion(
                      generateTreble(props.availableNotes, props.difficulty)
                    );
                  } else {
                    props.setQuestion(
                      generateBass(props.availableNotes, props.difficulty)
                    );
                  }
                }, 2000);
              } 
            } else {
              props.updateAnsweredRegs(reg);
              props.resetStreak();

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
        {props.correctNote ? <h1 className="task-text">Correct!</h1> : <h1 className="task-text">Pick a Note:</h1>}
        <ul className="note-buttons">
          {notes}
        </ul>
        <KeyboardOneOctave />
        {props.correctReg ? <h1 className="task-text">Correct!</h1> : <h1 className="task-text">Pick a Register:</h1>}
        <ul className="register-buttons">
          {regs}
        </ul>
        </div> 
    </div>
  );
}

const mapStateToProps = ({ Game, GameSettings }) => {
  return {
    correctNote: Game.correctNote,
    correctReg: Game.correctReg,
    answer: Game.answer,
    availableNotes: Game.availableNotes,
    answeredNotes: Game.answeredNotes,
    correctAnswer: Game.correctAnswer,
    availableRegs: Game.availableRegs,
    answeredRegs: Game.answeredRegs,
    clef: GameSettings.clef,
    clefSetting: GameSettings.clefSetting,
    difficulty: GameSettings.difficulty,
  };
}

const matchDispatchToProps = (dispatch) => {

  return bindActionCreators(
    {
      setClef,
      setCorrectNote,
      setCorrectReg,
      setCorrectAnswer,
      setQuestion,
      increaseStreak,
      resetStore,
      resetStreak,
      resetQuestion,
      updateAnsweredNotes,
      updateAnsweredRegs,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GameButtons);

