const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateTreble(notes, difficulty) {
  let noteNumber;
  let reg;
  switch(difficulty) {
    case 'medium':
      reg = getRandomInt(3, 6);
      if (reg === 3) {
        noteNumber = getRandomInt(5,6);
      } else if (reg === 6) {
        noteNumber = 0;
      } else {
        noteNumber = getRandomInt(0, 6);
      }
      break;
    case 'hard':
      reg = getRandomInt(3, 7);
      noteNumber = (reg === 3) ? getRandomInt(3, 6) : getRandomInt(0, 6);
      break;
    default: //easy
      reg = getRandomInt(4, 5);
      noteNumber = (reg === 4) ? getRandomInt(1, 6) : getRandomInt(0, 4);
  }

  return { note: notes[noteNumber], reg };
}

export function generateBass(notes, difficulty) {
  let noteNumber;
  let reg;
  switch (difficulty) {
    case 'medium':
      reg = getRandomInt(2, 4);
      noteNumber = (reg < 4) ? getRandomInt(0, 6) : getRandomInt(0, 2);
      break;
    case 'hard':
      reg = getRandomInt(1, 4);
      noteNumber = (reg === 4) ? getRandomInt(0, 4) : getRandomInt(0, 6);
      break;
    default: //easy
      reg = getRandomInt(2, 3);
      noteNumber = (reg === 2) ? getRandomInt(3, 6) : getRandomInt(0, 6);
  }

  return { note: notes[noteNumber], reg };
}
