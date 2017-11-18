import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameInfo } from '../components/GameNavButtons';
import { toggleVisibility } from '../actions/visibility';
import { 
  setDifficulty,
  setClef,
  setClefSetting,
  toggleClef,
  resetStore 
} from '../actions/gameSettings';
import { setQuestion } from '../actions/correctAnswer';
import { generateTreble, generateBass } from '../helpers/gameHelpers';

class GameSettingsContainer extends Component {
  handleToggleButton = () => {
    this.props.toggleVisibility();
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

  setClefHandler = (clefSetting) => {
    const { props } = this;
    props.resetStore();
    const { difficulty } = this.props.GameSettings;
    const { availableNotes } = this.props.Game;

    props.setClefSetting(clefSetting);

    if (clefSetting === 'both') {
      switch (props.GameSettings.clef) {
        case 'treble':
          props.setClef('bass');
          props.setQuestion(
            generateBass(availableNotes, difficulty)
          );
          break;
        case 'bass':
          props.setClef('treble');
          props.setQuestion(
            generateTreble(availableNotes, difficulty)
          );
          break;
      }
    }

    if (clefSetting === 'treble') {
      props.setClef(clefSetting);
      const newNote = generateTreble(availableNotes, difficulty);
      props.setQuestion(
        newNote
      ); 
    }
    
    if (clefSetting === 'bass') {
      props.setClef(clefSetting);
      props.setQuestion(
        generateBass(availableNotes, difficulty)
      );
    }
  }

  render() {
    const { isShowing, difficulty, clef, clefSetting } = this.props.GameSettings;
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

    const clefs = [
      {
        label: 'Treble',
        value: 'treble'
      },
      {
        label: 'Bass',
        value: 'bass',
      },
      {
        label: 'Both',
        value:  'both'
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
            {clefs.map(selectedClef => {
              const selectedClass = (selectedClef.value === clefSetting) ? 'selected' : '';
              return (
                <li
                  key={selectedClef.label}
                  onClick={() => this.setClefHandler(selectedClef.value)}
                  className={`button button__mode button__mode--clef ${selectedClass}`}
                >
                  {selectedClef.label}
                </li>
              );
            })}
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

const matchDispatchToProps = (dispatch) => bindActionCreators({
  toggleVisibility, 
  setDifficulty,
  setClef,
  setClefSetting,
  toggleClef,
  setQuestion,
  resetStore
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(GameSettingsContainer);

