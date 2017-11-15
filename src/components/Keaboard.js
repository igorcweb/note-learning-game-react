import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCorrectAnswer } from '../actions/correctAnswer';

const Keyboard = (props) => {

  // const answerData = [
  //   {},
  //   {}
  // ]

  const handleKey = (e) => {
    const answer = props.answer;
    console.log(answer);
    e.target.key === answer && props.setCorrectAnswer()
  }
  return (
    <div onClick={handleKey} className="keyboard-keys">
      <h1 className="task-text task-text__keys">or Pick a Key:</h1>
      <img className="keys" key='{note: "a", reg: 0}' src="/images/keys/C.jpg" alt="A0" />
      <img className="keys" key='{note: "b", reg: 0}' src="/images/keys/E.jpg" alt="B0" />
      <img className="keys" key='{note: "c", reg: 1}' src="/images/keys/C.jpg" alt="C1" />
      <img className="keys" key='{note: "d", reg: 1}' src="/images/keys/D.jpg" alt="D1" />
      <img className="keys" key='{note: "e", reg: 1}' src="/images/keys/E.jpg" alt="E1" />
      <img className="keys" key='{note: "f", reg: 1}' src="/images/keys/C.jpg" alt="F1" />
      <img className="keys" key='{note: "g", reg: 1}' src="/images/keys/D.jpg" alt="G1" />
      <img className="keys" key='{note: "a", reg: 1}' src="/images/keys/D.jpg" alt="A1" />
      <img className="keys" key='{note: "b", reg: 1}' src="/images/keys/E.jpg" alt="B1" />
      <img className="keys" key='{note: "c", reg: 2}' src="/images/keys/C.jpg" alt="C2" />
      <img className="keys" key='{note: "d", reg: 2}' src="/images/keys/D.jpg" alt="D2" />
      <img className="keys" key='{note: "e", reg: 2}' src="/images/keys/E.jpg" alt="E2" />
      <img className="keys" key='{note: "f", reg: 2}' src="/images/keys/C.jpg" alt="F2" />
      <img className="keys" key='{note: "g", reg: 2}' src="/images/keys/D.jpg" alt="G2" />
      <img className="keys" key='{note: "a", reg: 2}' src="/images/keys/D.jpg" alt="A2" />
      <img className="keys" key='{note: "b", reg: 2}' src="/images/keys/E.jpg" alt="B2" />
      <img className="keys" key='{note: "c", reg: 3}' src="/images/keys/C.jpg" alt="C3" />
      <img className="keys" key='{note: "d", reg: 3}' src="/images/keys/D.jpg" alt="D3" />
      <img className="keys" key='{note: "e", reg: 3}' src="/images/keys/E.jpg" alt="E3" />
      <img className="keys" key='{note: "f", reg: 3}' src="/images/keys/C.jpg" alt="F3" />
      <img className="keys" key='{note: "g", reg: 3}' src="/images/keys/D.jpg" alt="G3" />
      <img className="keys" key='{note: "a", reg: 3}' src="/images/keys/D.jpg" alt="A3" />
      <img className="keys" key='{note: "b", reg: 3}' src="/images/keys/E.jpg" alt="B3" />
      <img className="keys" key='{note: "c", reg: 4}' src="/images/keys/C.jpg" alt="C4" />
      <img className="keys" key='{note: "d", reg: 4}' src="/images/keys/D.jpg" alt="D4" />
      <img className="keys" key='{note: "e", reg: 4}' src="/images/keys/E.jpg" alt="E4" />
      <img className="keys" key='{note: "f", reg: 4}' src="/images/keys/C.jpg" alt="F4" />
      <img className="keys" key='{note: "g", reg: 4}' src="/images/keys/D.jpg" alt="G4" />
      <img className="keys" key='{note: "a", reg: 4}' src="/images/keys/D.jpg" alt="A4" />
      <img className="keys" key='{note: "b", reg: 4}' src="/images/keys/E.jpg" alt="B4" />
      <img className="keys" key='{note: "c", reg: 5}' src="/images/keys/C.jpg" alt="C5" />
      <img className="keys" key='{note: "d", reg: 5}' src="/images/keys/D.jpg" alt="D5" />
      <img className="keys" key='{note: "e", reg: 5}' src="/images/keys/E.jpg" alt="E5" />
      <img className="keys" key='{note: "f", reg: 5}' src="/images/keys/C.jpg" alt="F5" />
      <img className="keys" key='{note: "g", reg: 5}' src="/images/keys/D.jpg" alt="G5" />
      <img className="keys" key='{note: "a", reg: 5}' src="/images/keys/D.jpg" alt="A5" />
      <img className="keys" key='{note: "b", reg: 5}' src="/images/keys/E.jpg" alt="B5" />
      <img className="keys" key='{note: "c", reg: 6}' src="/images/keys/C.jpg" alt="C6" />
      <img className="keys" key='{note: "d", reg: 6}' src="/images/keys/D.jpg" alt="D6" />
      <img className="keys" key='{note: "e", reg: 6}' src="/images/keys/E.jpg" alt="E6" />
      <img className="keys" key='{note: "f", reg: 6}' src="/images/keys/C.jpg" alt="F6" />
      <img className="keys" key='{note: "g", reg: 6}' src="/images/keys/D.jpg" alt="G6" />
      <img className="keys" key='{note: "a", reg: 6}' src="/images/keys/D.jpg" alt="A6" />
      <img className="keys" key='{note: "b", reg: 6}' src="/images/keys/E.jpg" alt="B6" />
      <img className="keys" key='{note: "c", reg: 7}' src="/images/keys/C.jpg" alt="C7" />
      <img className="keys" key='{note: "d", reg: 7}' src="/images/keys/D.jpg" alt="D7" />
      <img className="keys" key='{note: "e", reg: 7}' src="/images/keys/E.jpg" alt="E7" />
      <img className="keys" key='{note: "f", reg: 7}' src="/images/keys/C.jpg" alt="F7" />
      <img className="keys" key='{note: "g", reg: 7}' src="/images/keys/D.jpg" alt="G7" />
      <img className="keys" key='{note: "a", reg: 7}' src="/images/keys/D.jpg" alt="A7" />
      <img className="keys" key='{note: "b", reg: 7}' src="/images/keys/E.jpg" alt="B7" />
      <img className="keys" key='{note: "c", reg: 8}' src="images/keys/highC.jpg" alt="C8" />

    </div>
  );
}


const mapStateToProps = ({ Game }) => {
  return {
    answer: Game.answer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setCorrectAnswer
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keyboard);