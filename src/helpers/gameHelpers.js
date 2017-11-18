const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let noteTracker = [];
let counter = 0;
let maxNotes = 0;

export function generateTreble(notes, difficulty) {
  let noteNumber;
  let reg;

  switch(difficulty) {
    case 'medium':
      maxNotes = 17;
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
      maxNotes = 32;
      reg = getRandomInt(3, 7);
      noteNumber = (reg === 3) ? getRandomInt(3, 6) : getRandomInt(0, 6);
      break;
    default: //easy
      maxNotes = 11;
      reg = getRandomInt(4, 5);
      noteNumber = (reg === 4) ? getRandomInt(1, 6) : getRandomInt(0, 4);
  }
  
  let usedNote = `${notes[noteNumber]}${reg}`;
  let note = { note: notes[noteNumber], reg };

  //prevent repeat
  if (counter === maxNotes || counter >= 32) {
    counter = 0;
    noteTracker = [];
  }
  
  if (noteTracker.indexOf(usedNote) !== -1) {
    return generateTreble(notes, difficulty);
  } else {
    counter++;
    noteTracker.push(usedNote);
    
    return note;
  }
}

export function generateBass(notes, difficulty) {
  let noteNumber;
  let reg;
  switch (difficulty) {
    case 'medium':
      maxNotes = 17;
      reg = getRandomInt(2, 4);
      noteNumber = (reg < 4) ? getRandomInt(0, 6) : getRandomInt(0, 2);
      break;
    case 'hard':
      maxNotes = 26;
      reg = getRandomInt(1, 4);
      noteNumber = (reg === 4) ? getRandomInt(0, 4) : getRandomInt(0, 6);
      break;
    default: //easy
      maxNotes = 11;
      reg = getRandomInt(2, 3);
      noteNumber = (reg === 2) ? getRandomInt(3, 6) : getRandomInt(0, 6);
  }

  let usedNote = (`${notes[noteNumber]}${reg}`);
  let note = { note: notes[noteNumber], reg };
  //prevent repeat
  if (counter === maxNotes || counter >= 26) {
    counter = 0;
    noteTracker = [];
  }
  if (noteTracker.indexOf(usedNote) >= 0) {
    return generateBass(notes, difficulty);
  } else {
    counter++;
    noteTracker.push(usedNote);
    return note;
  }
}
