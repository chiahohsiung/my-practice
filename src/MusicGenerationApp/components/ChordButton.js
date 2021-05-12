import React from 'react'
import { NoteButton } from './NoteButton'
import { connect } from 'react-redux'
import './ChordButton.css'

function ChordButton(props) {
  const { children } = props;
  return (
    <button className="chord-btn">{children}</button>
  )
}

function ChordRow(props) {
  const buttons = props.chordProgression.map((degree, index) => {
    console.log('degree', degree)
    let chordString = props.notes[degree-1]
    chordString = chordString.slice(0, chordString.length-1)
    chordString += ([1, 4, 5].includes(degree)) ? '' : 'm'
    console.log('chordString', chordString)
    console.log('props.notes', props.notes)
    return <ChordButton key={index}>{chordString}</ChordButton>
  })
  return (
    <div className="chord-row">
      <NoteButton></NoteButton>
      {buttons}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.midis.notes,
  chordProgression: state.midis.chordProgression
})
export default connect(mapStateToProps, null)(ChordRow);