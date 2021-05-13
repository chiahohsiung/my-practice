import { approachDescriptions } from "../musicLogic"

export const setMidis = (notes, bars) => dispatch => {
  /*
    notes: string[]
    bars: number
  */
  console.log('actions setMidis')
  const newMidi = {}
  notes.forEach(note => {
    newMidi[note] = Array(bars*8).fill(false)
  })
  console.log('newMidi', newMidi)
  dispatch({
    type: 'setMidis',
    payload: newMidi
  })
}

export const clickNote = (note, beat) => dispatch => {
  const setting = {
    note: note,
    beat: beat
  }
  dispatch({
    type: 'clickNote',
    payload: setting
  })
}

export const setClicked = (chords, notesClicked) => dispatch => {
  const newNotesClicked = {...notesClicked}
  for (let note in newNotesClicked) {
    newNotesClicked[note] = Array(newNotesClicked[note].length).fill(false)
  }
  chords.forEach((chord, index) => {
    for (let i=0; i<8; ++i) {
      // if < 0.5 rest else add a random note
      if (Math.random() > 0.5) {
        const randomIndex = Math.floor(Math.random() * chord.length);
        const randomNote = chord[randomIndex]
        newNotesClicked[randomNote][index*8 + i] = true
      }
    }
  })
  dispatch({
    type: 'setClicked',
    payload: newNotesClicked
  })
}

export const setApproach = (approach) => dispatch => {
  dispatch({
    type: 'setApproach',
    payload: approach
  })
}