import React from 'react'
import { NoteButton } from './NoteButton'

import './ChordButton.css'

function ChordButton(props) {
  const { children } = props;
  return (
    <button className="chord-btn">{children}</button>
  )
}

function ChordRow() {

  return (
    <div className="chord-row">
      <NoteButton></NoteButton>
      <ChordButton>Am</ChordButton>
      <ChordButton>Dm</ChordButton>
      <ChordButton>G</ChordButton>
      <ChordButton>C</ChordButton>
    </div>
  )
}

export default ChordRow;