import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCorrectNote,
  setCorrectReg,
  setCorrectAnswer,
  setQuestion,
  resetQuestion,
  updateAnsweredNotes,
  updateAnsweredRegs,
  setWrongKey
} from '../actions/correctAnswer';
import { increaseStreak, resetStreak } from '../actions/streak';
import { resetStore, setClefSetting, setClef } from '../actions/gameSettings';
import { generateTreble, generateBass } from '../helpers/gameHelpers';

const KeyboardOneOctave = (props) => {
  const keyboardText = () => {
    if (props.correctNote) {
      return <h1 className="task-text task-text--one-octave">Correct!</h1>;
    } else if (props.wrongKey) {
      return <h1 className="task-text task-text--one-octave">Try Again!</h1>
    } else {
      return <h1 className="task-text task-text--one-octave">or a Key:</h1>
    }
  }
  const handleKey = (e) => {
    const answer = props.answer;
    if(e.target.dataset.key === answer.note) {
      props.setCorrectNote()
      if(props.correctReg) {
        props.setCorrectAnswer();
        props.increaseStreak();
        setTimeout(() => {
          props.resetStore();
          if (props.clefSetting === 'both') {
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
      props.resetStreak();
      props.setWrongKey();
    }
  }
  return (
    <div>
      {keyboardText()}
      <div className="one-octave" onClick={handleKey}>
        <img className="keys" data-key="c" src="images/keys/C.jpg" alt="c" />
        <img className="keys" data-key="d" src="images/keys/D.jpg" alt="d" />
        <img className="keys" data-key="e" src="images/keys/E.jpg" alt="e" />
        <img className="keys" data-key="f" src="images/keys/C.jpg" alt="f" />
        <img className="keys" data-key="g" src="images/keys/D.jpg" alt="g" />
        <img className="keys" data-key="a" src="images/keys/D.jpg" alt="a" />
        <img className="keys" data-key="b" src="images/keys/E.jpg" alt="b" />
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
    wrongKey: Game.wrongKey
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
      setWrongKey
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(KeyboardOneOctave);