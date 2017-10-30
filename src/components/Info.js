import React from 'react';
import {BackToTheGame} from './GameNavButtons';

const Info = () => (
  <div>
    <header className="info header">
      <h1 className="title">Learn How to Read Music</h1>
      <BackToTheGame />
      <div className="button button__email"><a href="mailto:notelearninggame@gmail.com?subject=Note-Learning Game">Get in Touch</a></div> 
    </header>
    <div className="info-wrapper">
      <article>
        <h1>Notes</h1>
        <p>
          The entire musical alphabet is represented by only seven letters: A, B, C, D, E, F, G. Modern music notation uses the
          staff of five lines. The notes are placed on the lines as well as on the spaces between the lines. A pattern of consecutive
          notes will always consist of alternating lines and spaces. The best way to remember the position of each note on the
          staff is to learn which ones are on the spaces and which ones are on the lines.
        </p>
        <img className="treble-staff" src="/images/treble-staff.png" alt="treble-staff" />
        <img className="bass-staff" src="/images/bass-staff.png" alt="bass-staff" />
        <p>
          Let us first look at the treble clef which is used for the notes in the upper register. The notes on the spaces are F, A,
          C, E. The notes on the lines are E, G, B, D, F. You will notice that space-notes are skipping over the lines, and the
          line-notes are skipping over the spaces, so if you include the missing lines and spaces in each pattern, you will end
          up with <strong>F</strong>, g, <strong>A</strong>, b, <strong>C</strong>, d, <strong>E</strong> and <strong>E</strong>,
          f, <strong>G</strong>, a, <strong>B</strong>, c, <strong>D</strong>, e, <strong>F</strong>.
        </p>
        <p>
          You can follow the same pattern to the bass cleff which is used for the notes in the lower register. The space-notes
          are A, C, E, G. The line-notes are G, B, D, F, A.
        </p>
        <p>
          The ledger lines are used to notate the notes outside of the staff.  The lines are added as needed, following the same space-line or line-space pattern as the notes within the staff.
        </p>
        <img className="ledger-treble" src="/images/ledger-treble.png" alt="ledger-treble" />
        <img className="ledger-bass" src="/images/ledger-bass.png" alt="ledger-bass" />
        <p>
          The notes on the piano keyboard are recognized by the recurring patterns of two and three black keys. To find C, D, E, look for the two black keys. To find F, G, A, B, look for the three black keys.
        </p>
        <img className="note-names" src="/images/notenames.png" alt="note-names" />
        <h1>Registers</h1>
        <p>
          In order to determine which note corresponds with a particular pitch, it is not enought to just now the letter name. You also have to know which octave register it belongs to.
          There are seven full registers in modern music notation.  Each registars starts with C.  All of the notes between C1 and C2 are in the first register. The same pattern is applied the rest of the registers.
          In the examples bellow, you can see what it looks like on the piano keyboard as well as on the staff.  8va (octava) bellow the staff is used to notate the notes that are one octave bellow.  8va and 15ma (quindicesima) above the staff
          are used to notate the notes that are one and two octaves above.
        </p>
        <img className="keyboard-registers" src="/images/keyboard-registers.jpg" alt="keyboard-registers" />
        <img className="staff-registers" src="/images/staff-registers.jpeg" alt="staff-registers" />
      </article>
    </div>


  </div>
);

export default Info;