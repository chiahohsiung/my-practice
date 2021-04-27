import React from 'react';
import SongList from './SongList'
// import OutputBoard from './OutputBoard'
import MidiRow from './components/MidiRow'
import PlayButton from './components/PlayButton'
import './MusicGenerationApp.css'
import * as Tone from 'tone'

class MusicGenerationApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      midi: {
        'C4': [false, false, false, false, false, false, false, false]
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  handleClick(beat) {
    const newMidi = {...this.state.midi}
    newMidi['C4'][beat-1] = !newMidi['C4'][beat-1] 
    this.setState({ midi: newMidi })
  }

  handlePlay() {
    const newMidi = {...this.state.midi}
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();

    for (let i=0; i<newMidi['C4'].length; ++i) {
      if (newMidi['C4'][i]) {
        synth.triggerAttackRelease("C4", "8n", now+i*0.25);
      }
      
    }
  }

  componentDidUpdate() {
    console.log('hi')
    console.log('state', this.state)
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Markov Chain</h1>
        </div>
        <PlayButton handlePlay={this.handlePlay}/>
        <div className="MidiRoll">
          <MidiRow handleClick={this.handleClick}/>
          {/* <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow />
          <MidiRow /> */}
        </div>
        <div className="content">
          <SongList />
          { /* <OutputBoard />*/}
        </div>
      </div>
    )
  }
}


export default MusicGenerationApp;