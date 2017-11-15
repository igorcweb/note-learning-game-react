import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCorrectNote } from '../actions/correctAnswer';

const KeyboardOneOctave = (props) => { 
  const handleKey = (e) => {
    const answer = props.answer;
    e.target.dataset.key === answer.note && props.setCorrectNote();
  }
  return (
    <div>
      <h1 className="task-text task-text--one-octave">or a Key:</h1>
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

const mapStateToProps = ({ Game }) => {
  return {
    correctNote: Game.correctNote,
    answer: Game.answer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators (
    {
      setCorrectNote
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(KeyboardOneOctave);