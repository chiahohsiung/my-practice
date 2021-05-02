import React, { useState } from 'react';

import './MidiButton.css'

function MidiButton(props) {
  const [isPressed, setPressed] = useState(false);
  const pressedClass = isPressed ? "midi-btn-pressed" : "midi-btn-unpressed"
  return (
    <button className={`midi-btn ${pressedClass} beat-${props.beat}`}
      onClick={() => {
        setPressed(!isPressed)
        props.handleClick(props.note, props.beat)
      }}>

    </button>
  )
}

export default MidiButton;