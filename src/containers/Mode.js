import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameInfo } from '../components/GameNavButtons';
import { modeDisplayBlock, modeDisplayNone } from '../actions/display';
import {store} from '../app';

class Mode extends Component {

  handleHamburger = (event) => {
    event.target.classList.add('hide');
    event.target.nextSibling.classList.remove('hide');
    store.dispatch(modeDisplayBlock());
  }

  handleCross = (event) => {
    event.target.classList.add('hide');
    event.target.previousSibling.classList.remove('hide');
    store.dispatch(modeDisplayNone());
  }

  render() {
    return (
      <div>
      {console.log(store)}
        <div className="mode" style={{ display: this.props.display.display}}>
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
          <Link className="button button__info link" to="/info" style={{ display: this.props.display.display}}>Game Info</Link>
          </div>
        <div>
          <button onClick={this.handleHamburger} className="hamburger">&#9776;</button>
          <button onClick={this.handleCross} className="cross hide">&#735;</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //takes state and passes into container as a prop
  return {
    display: state.ModeDisplay
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({modeDisplayBlock, modeDisplayNone}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Mode);





