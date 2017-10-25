import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameHeader from './GameHeader';
import GameBody from './GameBody';

//converting component into container

class HomePage extends Component {
  render() {
    return (
      <div>
        <GameHeader />
        <GameBody />
      </div>
    );
  }
}

function mapStateToProps(state) { //takes state and passes into container as a prop
  return {
    ModeDisplay: state.ModeDisplay
  }
}

export default connect(mapStateToProps)(HomePage);





class ModeStyle extends Component {

  render() {

  }
}