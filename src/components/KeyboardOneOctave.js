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
      <ul className="octave" onClick={handleKey}>
        <li className="key white c" data-key="c"></li>
        <li className="key black cs" data-key="cs"></li>
        <li className="key white d" data-key="d"></li>
        <li className="key black ds" data-key="ds"></li>
        <li className="key white e" data-key="e"></li>
        <li className="key white f" data-key="f"></li>
        <li className="key black fs" data-key="fs"></li>
        <li className="key white g" data-key="g"></li>
        <li className="key black gs" data-key="gs"></li>
        <li className="key white a" data-key="a"></li>
        <li className="key black as" data-key="as"></li>
        <li className="key white b" data-key="b"></li>
      </ul>
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