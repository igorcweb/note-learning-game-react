import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameInfo } from '../components/GameNavButtons';
import { toggleVisibility } from '../actions/display';

class GameSettingsContainer extends Component {

  handleToggleButton = () => {
    this.props.toggleVisibility();
  }

  render() {
    const { isShowing } = this.props.GameSettings;
    const ToggleButtonData = {
      content: (isShowing) ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i>,
      className: (isShowing) ? 'cross' : 'hamburger'
    };
    const gameSettingsContainerClasses = classnames(
      'game-settings',
      { 'is-showing': isShowing }
    );

    return (
      <div>
        <div className={gameSettingsContainerClasses}>
          <ul className="level">
            <li className="button button__mode button__mode--level highlight" id="easy">Easy</li>
            <li className="button button__mode button__mode--level" id="medium">Medium</li>
            <li className="button button__mode button__mode--level" id="hard">Hard</li>
          </ul>
          <ul className="clef">
            <li className="button button__mode button__mode--clef highlight selected treble">Treble</li>
            <li className="button button__mode button__mode--clef bass">Bass</li>
            <li className="button button__mode button__mode--clef both">Both</li>
          </ul>
        </div>
          <div>
          <Link className="button button__info link" to="/info">Game Info</Link>
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

const mapStateToProps = ({ GameSettings }) => {
  return { GameSettings };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleVisibility}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GameSettingsContainer);

