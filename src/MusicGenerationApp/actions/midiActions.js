
export const setMidis = (notes, bars) => dispatch => {
  /*
    notes: string[]
    bars: number
  */
  console.log('actions setMidis')
  const newMidi = {}
  notes.reverse().forEach(note => {
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

