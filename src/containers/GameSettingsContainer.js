import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameInfo } from '../components/GameNavButtons';
import { toggleVisibility } from '../actions/visibility';

class GameSettingsContainer extends Component {
  handleToggleButton = () => {
    this.props.toggleVisibility();
  }

  render() {
    const { isShowing } = this.props.GameSettings;
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

    return (
      <div>
        <div className={gameSettingsContainerClasses}>
          <ul className="level">
            <li className="button button__mode button__mode--level highlight">Easy</li>
            <li className="button button__mode button__mode--level">Medium</li>
            <li className="button button__mode button__mode--level">Hard</li>
          </ul>
          <ul className="clef">
            <li className="button button__mode button__mode--clef highlight selected treble">Treble</li>
            <li className="button button__mode button__mode--clef bass">Bass</li>
            <li className="button button__mode button__mode--clef both">Both</li>
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
    GameSettings
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleVisibility}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GameSettingsContainer);

