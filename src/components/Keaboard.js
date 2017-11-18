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
import {increaseStreak, resetStreak} from '../actions/streak';
import { resetStore, setClefSetting, setClef } from '../actions/gameSettings';
import { generateTreble, generateBass } from '../helpers/gameHelpers';

const Keyboard = (props) => {

  // const answerData = [
  //   {},
  //   {}
  // ]

  
  const keyText = () => {
      if (props.correctAnswer) {
        return <h1 className="task-text task-text__keys">Correct!</h1>;
      } else if (props.wrongKey) {
        return <h1 className="task-text task-text__keys">Try Again!</h1>
      } else {
        return <h1 className="task-text task-text__keys">or Pick a Key:</h1>
      }
  }

  const handleKey = (e) => {
    const answer = props.answer;
    if(e.target.dataset.key === `${answer.note}${answer.reg}`) {
      props.setCorrectNote();
      props.setCorrectReg();
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
    } else {
      props.resetStreak();
      props.setWrongKey();
    }
  }
  return (
    <div onClick={handleKey} className="keyboard-keys">
      {keyText()}
      <img className="keys" data-key='a0' src="/images/keys/C.jpg" alt="A0" />
      <img className="keys" data-key='b0' src="/images/keys/E.jpg" alt="B0" />
      <img className="keys" data-key='c1' src="/images/keys/C.jpg" alt="C1" />
      <img className="keys" data-key='d1' src="/images/keys/D.jpg" alt="D1" />
      <img className="keys" data-key='e1' src="/images/keys/E.jpg" alt="E1" />
      <img className="keys" data-key='f1' src="/images/keys/C.jpg" alt="F1" />
      <img className="keys" data-key='g1' src="/images/keys/D.jpg" alt="G1" />
      <img className="keys" data-key='a1' src="/images/keys/D.jpg" alt="A1" />
      <img className="keys" data-key='b1' src="/images/keys/E.jpg" alt="B1" />
      <img className="keys" data-key='c2' src="/images/keys/C.jpg" alt="C2" />
      <img className="keys" data-key='d2' src="/images/keys/D.jpg" alt="D2" />
      <img className="keys" data-key='e2' src="/images/keys/E.jpg" alt="E2" />
      <img className="keys" data-key='f2' src="/images/keys/C.jpg" alt="F2" />
      <img className="keys" data-key='g2' src="/images/keys/D.jpg" alt="G2" />
      <img className="keys" data-key='a2' src="/images/keys/D.jpg" alt="A2" />
      <img className="keys" data-key='b2' src="/images/keys/E.jpg" alt="B2" />
      <img className="keys" data-key='c3' src="/images/keys/C.jpg" alt="C3" />
      <img className="keys" data-key='d3' src="/images/keys/D.jpg" alt="D3" />
      <img className="keys" data-key='e3' src="/images/keys/E.jpg" alt="E3" />
      <img className="keys" data-key='f3' src="/images/keys/C.jpg" alt="F3" />
      <img className="keys" data-key='g3' src="/images/keys/D.jpg" alt="G3" />
      <img className="keys" data-key='a3' src="/images/keys/D.jpg" alt="A3" />
      <img className="keys" data-key='b3' src="/images/keys/E.jpg" alt="B3" />
      <img className="keys" data-key='c4' src="/images/keys/C.jpg" alt="C4" />
      <img className="keys" data-key='d4' src="/images/keys/D.jpg" alt="D4" />
      <img className="keys" data-key='e4' src="/images/keys/E.jpg" alt="E4" />
      <img className="keys" data-key='f4' src="/images/keys/C.jpg" alt="F4" />
      <img className="keys" data-key='g4' src="/images/keys/D.jpg" alt="G4" />
      <img className="keys" data-key='a4' src="/images/keys/D.jpg" alt="A4" />
      <img className="keys" data-key='b4' src="/images/keys/E.jpg" alt="B4" />
      <img className="keys" data-key='c5' src="/images/keys/C.jpg" alt="C5" />
      <img className="keys" data-key='d5' src="/images/keys/D.jpg" alt="D5" />
      <img className="keys" data-key='e5' src="/images/keys/E.jpg" alt="E5" />
      <img className="keys" data-key='f5' src="/images/keys/C.jpg" alt="F5" />
      <img className="keys" data-key='g5' src="/images/keys/D.jpg" alt="G5" />
      <img className="keys" data-key='a5' src="/images/keys/D.jpg" alt="A5" />
      <img className="keys" data-key='b5' src="/images/keys/E.jpg" alt="B5" />
      <img className="keys" data-key='c6' src="/images/keys/C.jpg" alt="C6" />
      <img className="keys" data-key='d6' src="/images/keys/D.jpg" alt="D6" />
      <img className="keys" data-key='e6' src="/images/keys/E.jpg" alt="E6" />
      <img className="keys" data-key='f6' src="/images/keys/C.jpg" alt="F6" />
      <img className="keys" data-key='g6' src="/images/keys/D.jpg" alt="G6" />
      <img className="keys" data-key='a6' src="/images/keys/D.jpg" alt="A6" />
      <img className="keys" data-key='b6' src="/images/keys/E.jpg" alt="B6" />
      <img className="keys" data-key='c7' src="/images/keys/C.jpg" alt="C7" />
      <img className="keys" data-key='d7' src="/images/keys/D.jpg" alt="D7" />
      <img className="keys" data-key='e7' src="/images/keys/E.jpg" alt="E7" />
      <img className="keys" data-key='f7' src="/images/keys/C.jpg" alt="F7" />
      <img className="keys" data-key='g7' src="/images/keys/D.jpg" alt="G7" />
      <img className="keys" data-key='a7' src="/images/keys/D.jpg" alt="A7" />
      <img className="keys" data-key='b7' src="/images/keys/E.jpg" alt="B7" />
      <img className="keys" data-key='c8' src="images/keys/highC.jpg" alt="C8" />

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

export default connect(mapStateToProps, matchDispatchToProps)(Keyboard);