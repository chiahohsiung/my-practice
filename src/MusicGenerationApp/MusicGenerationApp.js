import React from 'react';
// import OutputBoard from './OutputBoard'
import MidiRow from './components/MidiRow'
import PlayButton from './components/PlayButton'
import ApproachButton from './components/ApproachButton'
import './MusicGenerationApp.css'
import * as Tone from 'tone'
import { connect } from "react-redux";
import { setMidis } from './actions/midiActions'
import { getChordNotes, chordNotesOctaveToFour } from './musicLogic'
import NoteColumn from './components/NoteButton'
import ChordRow from './components/ChordButton'



const majorSeventh = [0, 4, 7, 11]
const seventh = [0, 4, 7, 10]
const chordsWithMidiNumber = getChordNotes([6, 2, 5, 1])
const chordsWithNoteName = chordsWithMidiNumber.map(chord => {
  const chordWithNoteName = chord.map(midiNumber => {
    return Tone.Frequency(midiNumber, "midi").toNote(); // "A4"
  })

  return chordWithNoteName
})


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
    this.props.setMidis(this.props.notes, this.props.bars)
  }

  handlePlay() {
    const newMidi = { ...this.props.notesClicked }
    const synth = new Tone.PolySynth().toDestination();
    const now = Tone.now();
    for (let i = 0; i < newMidi['C4'].length; ++i) {
      let curNotes = []
      for (let note in newMidi) {
        if (newMidi[note][i]) {
          curNotes.push(note)
        }
      }
      synth.triggerAttackRelease(curNotes, "8n", now + i * 0.25);
      // play chord
      if (i % 8 === 0) {
        const synth = new Tone.PolySynth().toDestination();
        const now = Tone.now();
        const chordIndex = Math.floor(i / 8)
        synth.triggerAttackRelease(chordsWithNoteName[chordIndex], "2n", now + i * 0.25, 0.5);
      }

    }
  }

  render() {
    let midiRows = [];
    let i = 0
    const chordsWithNoteNameFour = chordNotesOctaveToFour(chordsWithNoteName)
    for (let note in this.props.notesClicked) {
      // let disabled = i % 2 === 1 ? true : false;
      let isDisabledInBars = Array(this.props.bars).fill(false)
      chordsWithNoteNameFour.forEach((chord, index) => {
        if (!chord.includes(note)) {
          isDisabledInBars[index] = true
        }
      })

      // let disabled = false
      midiRows.push(
        <MidiRow
          key={i}
          note={note}
          bars={this.props.bars}
          isDisabledInBars={isDisabledInBars}
        // handleClick={this.handleClick}
        />)
      i++;
    }
    // make sure the lower notes are shown lower
    midiRows = midiRows.reverse()
    return (
      <div className="app">
        <div className="header">
          <h1>How to Improvise</h1>
        </div>
        <div className="approach-container">
          <ApproachButton>Chord Notes</ApproachButton>
          <ApproachButton>Motif Dev</ApproachButton>
        </div>


        
        <ChordRow />
        <div className="note-midi-container">
          <NoteColumn />
          <div className="MidiRoll">
            {midiRows}
          </div>
        </div>
        <div className="play-btn-container">
          <PlayButton handlePlay={this.handlePlay}/>
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