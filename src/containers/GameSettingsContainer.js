import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameInfo } from '../components/GameNavButtons';
import { toggleVisibility } from '../actions/visibility';
import { 
  setTreble, 
  setBass, 
  setDifficulty,
  toggleClef,
  resetStore 
} from '../actions/gameSettings';
import { setQuestion } from '../actions/correctAnswer';
import { generateTreble } from '../helpers/gameHelpers';
import { generateBass } from '../helpers/gameHelpers';

class GameSettingsContainer extends Component {
  handleToggleButton = () => {
    this.props.toggleVisibility();
  }

  handleTrebleButton = () => {
    // this.props.setClef(this.props.Game.clef);
    this.props.resetStore();
    console.log(this.props.Game);
    this.props.setTreble();
    const { difficulty } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;
    this.props.setQuestion(
      generateTreble(availableNotes, difficulty)
    );
  }

  handleBassButton = () => {
    this.props.resetStore();
    this.props.setBass();
    const { difficulty } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;
    this.props.setQuestion(
      generateBass(availableNotes, difficulty)
    );
  }

  setDifficultyHandler = (difficulty) => {
    this.props.resetStore();
    this.props.setDifficulty(difficulty);
    const { clef } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;
    if (clef === 'treble') {
      this.props.setQuestion(
        generateTreble(availableNotes, difficulty)
      );
    } else {
      this.props.setQuestion(
        generateBass(availableNotes, difficulty)
      );
    }
  }

  handleBothButton = () => {
    this.props.resetStore();
    this.props.toggleClef();
    const { clef } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;
    const { difficulty } = this.props.GameSettings;
    if (clef === 'treble') {
      this.props.setQuestion(
        generateTreble(availableNotes, difficulty)
      );
    } else {
      this.props.setQuestion(
        generateBass(availableNotes, difficulty)
      );
    }
  }

  render() {
    const { isShowing, difficulty } = this.props.GameSettings;
    const ToggleButtonData = {
      content: (isShowing) ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>,
      className: (isShowing) ? 'cross' : 'hamburger'
    };
    const gameSettingsContainerClasses = classnames(
      'game-settings',
      { 'is-showing': isShowing }
    );

    const gameInfoClasses = classnames(
      'button button__info link',
      { 'is-showing': isShowing }
    );

    const difficultyLevels = [
      {
        label: 'Easy',
        value: 'easy'
      },
      {
        label: 'Medium',
        value: 'medium'
      },
      {
        label: 'Hard',
        value: 'hard'
      }
    ];

    return (
      <div>
        <div className={gameSettingsContainerClasses}>
          <ul className="level">
            {difficultyLevels.map(diff => {
              const selectedClass = (diff.value === difficulty) ? 'selected' : '';

              return (
                <li
                  key={diff.label}
                  onClick={() => this.setDifficultyHandler(diff.value)}
                  className={`button button__mode button__mode--level ${selectedClass}`}
                >
                  {diff.label}
                </li>
              );
            })}
          </ul>
          <ul className="clef">
            <li 
              onClick={this.handleTrebleButton}
              className="button button__mode button__mode--clef highlight treble">Treble</li>
            <li 
              onClick={this.handleBassButton}
              className="button button__mode button__mode--clef bass">Bass</li>
            <li 
              onClick={this.handleBothButton}
              className="button button__mode button__mode--clef both">Both</li>
          </ul>
        </div>
        <div>
          <Link className={gameInfoClasses} to="info">Game Info</Link>
        </div>
        <div>
          <button 
            onClick={this.handleToggleButton} 
            className={ToggleButtonData.className}
          >
            {ToggleButtonData.content}
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ Game, GameSettings }) => {
  return {
    GameSettings,
    Game
  };
}

const matchDispatchToProps = (dispatch) => {
  // return {
  //   ...bindActionCreators({ resetStore } ,dispatch),
  //   setClef(currentClef, selectedClef) {
  //     let nextCelf;

  //     if (selectedClef === 'both') {
  //       nextCelf = (currentClef === 'treble') ? 'bass' : 'treble';
  //     }

  //     dispatch(someMethodNameToSetTheClef(nextCelf));
  //   }
  // };

  return bindActionCreators({
    toggleVisibility, 
    setTreble, 
    setBass, 
    setDifficulty,
    setQuestion,
    resetStore
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GameSettingsContainer);

