const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateTreble(notes, difficulty) {
  let noteNumber;
  let reg;

  switch(difficulty) {
    case 'medium':

      break;
    case 'hard':

      break;
    default:
      reg = getRandomInt(4, 5);
      noteNumber = (reg === 4) ? getRandomInt(1, 6) : getRandomInt(0, 4);
  }

  return { note: notes[noteNumber], reg };
}

export function generateBass(notes, difficulty) {
  console.warn('I am not implemented');
}
