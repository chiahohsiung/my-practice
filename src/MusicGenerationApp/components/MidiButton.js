import React, { useState } from 'react';
import { connect } from 'react-redux'
import { clickNote } from '../actions/midiActions'
import './MidiButton.css'

function MidiButton(props) {
  // const [isPressed, setPressed] = useState(false);
  const pressedClass = props.btnClicked ? "midi-btn-pressed" : "midi-btn-unpressed"
  
  const disabledClass = props.disabled ? "midi-btn-disabled" : "midi-btn-undisabled"
  const insideClass = props.btnInside ? "" : "midi-btn-outside"
  return (
    <button 
      className={`midi-btn ${insideClass} ${disabledClass} ${pressedClass} beat-${props.beat}`}
      disabled={props.disabled}
      onClick={() => {
        // setPressed(!isPressed)
        props.clickNote(props.note, props.beat)
      }}>

    </button>
  )
}

export default connect(null, { clickNote })(MidiButton);