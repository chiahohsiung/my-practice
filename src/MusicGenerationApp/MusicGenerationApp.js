import React from 'react';
// import OutputBoard from './OutputBoard'
import MidiRow from './components/MidiRow'
import PlayButton from './components/PlayButton'
import ApproachButton from './components/ApproachButton'
import './MusicGenerationApp.css'
import * as Tone from 'tone'
import { connect } from "react-redux";
import { setMidis, setClicked } from './actions/midiActions'
import { getChordNotes, chordNotesOctaveToFour, approachDescriptions } from './musicLogic'
import NoteColumn from './components/NoteButton'
import ChordRow from './components/ChordButton'
import Description from './components/Description'
import GenerateExample from './components/GenerateExample'

// const description = 'One of the easiest and most intuitive way to construct a melody is using notes in the chord. For example, during a C major chord, you can play C, E, or G. This way, the melody would sound smooth and harmonical.'

function degreeToChords(chordProgression) {
  const chordsWithMidiNumber = getChordNotes(chordProgression)
  const chordsWithNoteName = chordsWithMidiNumber.map(chord => {
    const chordWithNoteName = chord.map(midiNumber => {
      return Tone.Frequency(midiNumber, "midi").toNote(); // "A4"
    })

    return chordWithNoteName
  })
  return chordsWithNoteName
}

function chordsToDisabledRows(chordsWithNoteName, notes, bars) {
  const chordsWithNoteNameFour = chordNotesOctaveToFour(chordsWithNoteName)
  let notesDisabled = {}
  notes.forEach(note => {
    // let disabled = i % 2 === 1 ? true : false;
    let isDisabledInBars = Array(bars).fill(false)
    chordsWithNoteNameFour.forEach((chord, index) => {
      if (!chord.includes(note)) {
        isDisabledInBars[index] = true
      }
    })
    console.log('note', note)
    notesDisabled[note] = isDisabledInBars

  })
  return notesDisabled
}

class MusicGenerationApp extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
    this.generateExample = this.generateExample.bind(this)
  }

  handlePlay() {
    const chordsWithNoteName = degreeToChords(this.props.chordProgression)
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

  generateExample() {
    const chords = [['G4', 'B4', 'D4'], ['C4', 'E4', 'G4']]
    this.props.setClicked(chords, this.props.notesClicked)
  }


  render() {
    let midiRows = [];
    let i = 0
    const chordsWithNoteName = degreeToChords(this.props.chordProgression)
    const notesDisabled = chordsToDisabledRows(chordsWithNoteName, this.props.notes, this.props.bars)
    console.log(' this.props.notes', this.props.notes)
    this.props.notes.forEach(note => {
      // console.log('note', note)
      midiRows.push(
        <MidiRow
          key={i}
          note={note}
          bars={this.props.bars}
          btnsClicked={this.props.notesClicked[note]}
          isDisabledInBars={Array(16).fill(false)}
        />)
      i++;
    })

    // make sure the lower notes are shown lower
    if (this.props.notes[0] === 'C4') {
      console.log('flip')
      midiRows = midiRows.reverse()
    }

    const description = approachDescriptions[this.props.approach]
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
        <Description description={description}>
          <div className="play-btn-container">
            <GenerateExample generateExample={this.generateExample} />
            <PlayButton handlePlay={this.handlePlay} />
          </div>
        </Description>
      </div>
    )
  }
}

// export default MusicGenerationApp;
const mapStateToProps = (state) => ({
  approach: state.midis.approach,
  bars: state.midis.bars,
  notes: state.midis.notes,
  notesClicked: state.midis.notesClicked,
  chordProgression: state.midis.chordProgression
})

export default connect(mapStateToProps, { setMidis, setClicked })(MusicGenerationApp)