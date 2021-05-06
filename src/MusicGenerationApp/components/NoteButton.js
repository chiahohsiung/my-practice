import React from 'react'
import { connect } from 'react-redux'
import './NoteButton.css'
function NoteColumn(props) {
  
  const { notes } = props
  const column = notes.reverse().map(note => <NoteButton>{note[0]}</NoteButton>)
  
  return (
    <div className="note-column">
      {column}
    </div>
  )
}

function NoteButton(props) {
  const { children } = props
  return (
    <button className='note-btn'>
      {children}
    </button>
  )
}
const mapStateToProps = (state) => ({
  notes: state.midis.notes
})
export default connect(mapStateToProps, null)(NoteColumn);