import React, { useState } from 'react';
import { connect } from 'react-redux'
import { clickNote } from '../actions/midiActions'
import './MidiButton.css'

function MidiButton(props) {
  const [isPressed, setPressed] = useState(false);
  const pressedClass = isPressed ? "midi-btn-pressed" : "midi-btn-unpressed"
  return (
    <button className={`midi-btn ${pressedClass} beat-${props.beat}`}
      onClick={() => {
        setPressed(!isPressed)
        props.clickNote(props.note, props.beat)
      }}>

    </button>
  )
}

export default connect(null, { clickNote })(MidiButton);