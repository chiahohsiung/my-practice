import * as Tone from 'tone'


// chord
const majorSeventh = [0, 4, 7, 11]
const seventh = [0, 4, 7, 10]
const minor = [0, 3, 7]
const major = [0, 4, 7]
 
const mode = 'major'
const intervalToRoot = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4
const majorChords = [major, minor, minor, major, major, minor, minor]
const chordProgression = [6, 2, 5, 1] // in degree

export function getChordNotes(chordProgression) {
  const chords = chordProgression.map(degree => {
    console.log('degree', degree)
    const chordRoot = root + intervalToRoot[degree-1]
    console.log('chordRoot', chordRoot)
    const chord = majorChords[degree-1].map(interval => interval + chordRoot)
    return chord
  })
  return chords;
}

export function chordNotesOctaveToFour(chords) {
  const newChords = []
  chords.forEach(chord => {
    const newChord = []
    chord.forEach(note => {
      const newNote = note.slice(0, note.length-1) + '4'
      newChord.push(newNote)
    })
    newChords.push(newChord)
  })
  return newChords
}


