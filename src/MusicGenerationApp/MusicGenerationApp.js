import React from 'react';
// import OutputBoard from './OutputBoard'
import MidiRow from './components/MidiRow'
import PlayButton from './components/PlayButton'
import ApproachButton from './components/ApproachButton'
import './MusicGenerationApp.css'
import * as Tone from 'tone'
import { connect } from "react-redux";
import { setMidis } from './actions/midiActions'

class MusicGenerationApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      midi: {}
    }
    // this.handleClick = this.handleClick.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    console.log('props bars', this.props.bars)
    console.log('props notes', this.props.notes)
    this.props.setMidis(this.props.notes, this.props.bars)
    // const newMidi = {...this.state.midi}
    // this.props.notes.reverse().forEach(note => {
    //   newMidi[note] = Array(this.props.bars*8).fill(false)
    // })
    // console.log('newMidi', newMidi)
    // this.setState({ midi: newMidi})
  }  

  // handleClick(note, beat) {
  //   const newMidi = {...this.state.midi}
  //   newMidi[note][beat-1] = !newMidi[note][beat-1] 
  //   this.setState({ midi: newMidi })
  // }

  handlePlay() {
    const newMidi = {...this.props.notesClicked}
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

  render() {
    let midiRows = [];
    let i = 0
    for (let note in this.props.notesClicked) {
      midiRows.push(
      <MidiRow 
        key={i}
        note={note}
        bars={this.props.bars}
        // handleClick={this.handleClick}
      />)
      i++;
    }
    console.log('midiRows', midiRows)
    return (
      <div className="app">
        <div className="header">
          <h1>How to Improvise</h1>
        </div>
        <div className="approach-container">
          <ApproachButton>Chord Notes</ApproachButton>
        </div>
        <PlayButton handlePlay={this.handlePlay}/>
        <div className="MidiRoll">
          {midiRows}
        </div>
      </div>
    )
  }
}


// export default MusicGenerationApp;
const mapStateToProps = (state) => ({
  bars: state.midis.bars,
  notes: state.midis.notes,
  notesClicked: state.midis.notesClicked,
})

// const mapDispatchToProps = (dispatch) => {
//   console.log('mapdispatch')
//   return {
//     setmidis: (notes, bars) => setMidis(notes, bars)
//   }
// }

export default connect(mapStateToProps, { setMidis })(MusicGenerationApp)