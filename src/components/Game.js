import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import { setQuestion } from '../actions/correctAnswer';
import { generateTreble } from '../helpers/gameHelpers';

//converting component into container

class HomePage extends Component {
  componentDidMount() {
    const { difficulty } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;

    // generate the note and reg and set it as the current answer
    this.props.setQuestion(
      generateTreble(availableNotes, difficulty)
    );
  }

  render() {
    return (
      <div>
        <GameHeader />
        <GameBody />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Game: state.Game,
    GameSettings: state.GameSettings
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ setQuestion }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
