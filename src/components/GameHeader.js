import React from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {GameInfo} from './GameNavButtons'
import { Link } from 'react-router-dom';

const GameHeader = (props) => {
  return (
    <header className="header">
      <GameInfo />
      <h1 className="title">Note-Learning Game</h1>
      <h1 className="streak">Streak: <span id="streak">{props.streak}</span></h1> 
    </header>
  );

}

const mapStateToProps = ({ Game }) => {
  return {
    streak: Game.streak
  };
}

export default connect(mapStateToProps)(GameHeader);
