import React from 'react';
import { connect } from 'react-redux';

const KeyboardOneOctave = (props) =>{ 
  return (
    <div>
      <h1 className="task-text task-text--one-octave">or a Key:</h1>
      <div className="one-octave">
        <img className="keys" src="images/keys/C.jpg" alt="c" />
        <img className="keys" src="images/keys/D.jpg" alt="d" />
        <img className="keys" src="images/keys/E.jpg" alt="e" />
        <img className="keys" src="images/keys/C.jpg" alt="f" />
        <img className="keys" src="images/keys/D.jpg" alt="g" />
        <img className="keys" src="images/keys/D.jpg" alt="a" />
        <img className="keys" src="images/keys/E.jpg" alt="b" />
      </div>
    </div>
  );
}

const mapStateToProps = ({ Game }) => {
  return {
    correctNote: Game.correctNote
  }
}

export default connect(mapStateToProps)(KeyboardOneOctave);