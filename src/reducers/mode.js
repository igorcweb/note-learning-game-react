import {modeState} from '../appState';

const block = { display: 'block' };
const none = { display: 'none' };

export default (state = modeState, action) => {
  switch(action.type) {
    case 'DISPLAY_BLOCK':
      console.log('change display to "block"');
      return Object.assign(state, block);
    case 'DISPLAY_NONE':
      console.log('change display to "none"');
      return Object.assign(state, none);
    default:
      return state;
  }
};

