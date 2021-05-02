import React from 'react';
// import OutputBoard from './OutputBoard'
import MidiRow from './components/MidiRow'
import PlayButton from './components/PlayButton'
import ApproachButton from './components/ApproachButton'
import './MusicGenerationApp.css'
import * as Tone from 'tone'

class MusicGenerationApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bars: 4,
      notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'],
      midi: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    const newMidi = {...this.state.midi}
    this.state.notes.forEach(note => {
      newMidi[note] = Array(this.state.bars*8).fill(false)
    })
    console.log('newMidi', newMidi)
    this.setState({ midi: newMidi})
  }  

  handleClick(note, beat) {
    const newMidi = {...this.state.midi}
    newMidi[note][beat-1] = !newMidi[note][beat-1] 
    this.setState({ midi: newMidi })
  }

  handlePlay() {
    const newMidi = {...this.state.midi}
    const synth = new Tone.PolySynth().toDestination();
    const now = Tone.now();

    
    for (let i=0; i<newMidi['C4'].length; ++i) {
      let curNotes = []
      for (let note in newMidi) {
        if (newMidi[note][i]) {
          curNotes.push(note)
        }
      }
      console.log('curNotes', curNotes)
        
      synth.triggerAttackRelease(curNotes, "8n", now+i*0.25);
    }
  }

  // componentDidUpdate() {
  //   console.log('hi')
  //   console.log('state', this.state)
  // }
  render() {
    let midiRows = [];
    let i = 0
    for (let note in this.state.midi) {
      midiRows.push(
      <MidiRow 
        key={i}
        note={note}
        bars={this.state.bars}
        handleClick={this.handleClick}
      />)
      i++;
    }
    return (
      <div className="app">
        <div className="header">
          <h1>Markov Chain</h1>
        </div>
        <div className="approach-container">
          <ApproachButton>Chord Notes</ApproachButton>
        </div>
        <PlayButton handlePlay={this.handlePlay}/>
        <div className="MidiRoll">
          {midiRows}
          {/* <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow /> */}
        </div>
      </div>
    )
  }
}


export default MusicGenerationApp;