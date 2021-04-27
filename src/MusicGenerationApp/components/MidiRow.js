import React, {useState} from 'react';
import MidiButton from './MidiButton'
import './MidiRow.css'

function MidiRow(props) {
  const [numberOfBars, setBars] = useState(1);
  
  const content = [];
  for (let i=0; i<numberOfBars*8; ++i) {
    content.push(
      <MidiButton 
        key={i} 
        beat={i+1} 
        handleClick={(beat)=>props.handleClick(beat)}     
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