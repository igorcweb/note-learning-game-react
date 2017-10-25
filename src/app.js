import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import allReducers from './reducers';
import { modeDisplayBlock, modeDisplayNone } from './actions/display';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


export const store = createStore(allReducers);

const modeDisplay = store.getState().ModeDisplay

console.log('mode state: ', modeDisplay);

//store.dispatch(modeDisplayBlock());
//store.dispatch(modeDisplayNone());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter modeDisplay={modeDisplay} />
  </Provider>, 
  document.getElementById('app'));



