import React, {useState} from 'react';
import MidiButton from './MidiButton'
import './MidiRow.css'

function MidiRow(props) {
  const { bars, note, isDisabledInBars } = props;
  const disabled = []
  isDisabledInBars.forEach((curBarDisabled, index) => {
    for (let i = 0; i<8; ++i) {
      disabled.push(curBarDisabled)
    }
  })
  const content = [];
  for (let i=0; i<bars*8; ++i) {
    content.push(
      <MidiButton 
        key={i} 
        note={note}
        beat={i+1} 
        disabled={disabled[i]}
        // handleClick={(note, beat)=>props.handleClick(note, beat)}     
      />
    )
  }
  return (
    <div className="midi-row">
      {content}
    </div>
    
  )
}

export default MidiRow;