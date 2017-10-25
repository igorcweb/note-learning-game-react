const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notes = ["C", "D", "E", "F", "G", "A", "B"];

const easyTreble = () => {
  let noteNumber = 0;
  let reg = 0;
  reg = getRandomInt(4, 5);
  if (reg === 4) {
    noteNumber = getRandomInt(1, 6);
  } else {
    noteNumber = getRandomInt(0, 4);
  }
  let note = `/images/${notes[noteNumber]}${reg}.jpg`;
  return note;
}

export {easyTreble};




// function generateTreble() {
//   noteButton
//     .show()
//     .css({
//       color: "inherit",
//       "background-color": 'rgba(180, 191, 191, 0.9)'
//     });
//   regButton
//     .show()
//     .css({
//       color: "inherit",
//       "background-color": 'rgba(180, 191, 191, .9)'
//     });
//   $('.task1').text('Pick a Note:');
//   $('.task2').text('Pick a Register:');
//   $('.task3').text('or Pick a Key:');
//   $('.task4').text('or a Key:');
//   $('div.button__task').css('opacity', '1');
//   clefButtons.removeClass('note reg');
//   if ($('.level').children().hasClass('easy')) {
//     easyTreble();
//     maxNotes = 11;
//   } else if ($('.level').children().hasClass('medium')) {
//     mediumTreble();
//     maxNotes = 17;
//   } else {
//     hardTreble();
//     maxNotes = 32;
//   }
//   note = notes[noteNumber];
//   note += reg;
//   //prevent repeating notes until all have been used
//   if (counter === maxNotes || counter >= 32) {
//     counter = 0;
//     noteTrack = [];
//   }
//   //----------------------------------
//   if (noteTrack.indexOf(note) >= 0) {
//     generateTreble();
//   } else {
//     counter++;
//     imgSrc = "assets/images/" + note + ".jpg";
//     $('.notes').attr('src', imgSrc);
//     noteTrack.push(note);
//   }
// }

//Random Number Generator
