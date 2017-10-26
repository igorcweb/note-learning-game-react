import React from 'react';
import {BackToTheGame} from './GameNavButtons';

const Info = () => (
  <header className="info header">
    <h1 className="title">Learn How to Read Music</h1>
    <BackToTheGame />
    <div className="button button__email"><a href="mailto:notelearninggame@gmail.com?subject=Note-Learning Game">Get in Touch</a></div> 
  </header>
);

export default Info;