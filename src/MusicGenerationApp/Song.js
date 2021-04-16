import React from 'react';
import './Song.css'
import * as Tone from 'tone'


class Song extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      midi: ["C4", "E4", "G4"]
    }
  }

  playMidi(midi) {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    for (let i=0; i<midi.length; ++i) {
      synth.triggerAttackRelease(midi[i], "8n", now+i*0.5);
    }
  }

  render() {
    return(
      <div className="song">
        <button onClick={()=>this.playMidi(this.state.midi)} className="song__btn">
          Play
        </button>
        <h3 className="song-name">{this.props.name}</h3>
      </div>
    ) 
  }
}


export default Song;