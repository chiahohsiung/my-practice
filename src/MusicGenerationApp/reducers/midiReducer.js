

const initialState = {
  bars: 4,
  notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'],
  notesClicked: {},
  chordProgression: [2, 5, 1, 1]
}
function midiReducer(state=initialState, action) {
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
      const { note, beat } = action.payload
      const newNotesClicked = {...state.notesClicked}
      
      newNotesClicked[note][beat-1] = !newNotesClicked[note][beat-1] 
      return {...state, notesClicked: newNotesClicked}
    default:
      return state
  }
}

export default midiReducer;