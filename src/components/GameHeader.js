import React from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {GameInfo} from './GameNavButtons'
import { Link } from 'react-router-dom';


const GameHeader = () => (
  <header className="header">
    <h1 className="title">Note Learning Game</h1>
    <h1 className="streak">Streak:<span id="streak"> 0</span></h1>
    <GameInfo />
  </header>
);

const mapStateToProps = ({ Game, GameSettings }) => {
  return {
    GameSettings
  };
}

export default connect(mapStateToProps)(GameHeader);
