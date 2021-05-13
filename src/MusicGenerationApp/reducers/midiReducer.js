

const initialState = {
  bars: 2,
  notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
  notesClicked: {},
  chordProgression: [5, 1]
}
// initial btn unclicked
const newMidi = {}
initialState.notes.forEach(note => {
  newMidi[note] = Array(initialState.bars*8).fill(false)
})
initialState.notesClicked = newMidi
initialState.notesClicked['D4'][7] = true
console.log('initialState.notes', initialState.notes)
function midiReducer(state=initialState, action) {
  console.log('initialState in midireducer',initialState)
  switch (action.type) {
    case 'setBar':
      console.log('reducer -> setBar')
      return {...state}
    case 'setNotes':
      console.log('reducer -> setNotes')
      return {...state}
    case 'setMidis':
      console.log('reducer -> setMidis')
      return {...state, notesClicked: action.payload}
    case 'clickNote':
      console.log('reducer -> clickNote')
      console.log('state notes', state.notes)
      const { note, beat } = action.payload
      const newNotesClicked = {...state.notesClicked}
      
      newNotesClicked[note][beat-1] = !newNotesClicked[note][beat-1] 
      console.log('state notes', state.notes)
      return {...state, notesClicked: newNotesClicked}
    
    case 'setClicked':
      return {...state, notesClicked: action.payload}

    default:
      return state
  }
}

export default midiReducer;