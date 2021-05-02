import React, {useState} from 'react';
import MidiButton from './MidiButton'
import './MidiRow.css'

function MidiRow(props) {
  const { bars, note } = props;
  const content = [];
  for (let i=0; i<bars*8; ++i) {
    content.push(
      <MidiButton 
        key={i} 
        note={note}
        beat={i+1} 
        handleClick={(note, beat)=>props.handleClick(note, beat)}     
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