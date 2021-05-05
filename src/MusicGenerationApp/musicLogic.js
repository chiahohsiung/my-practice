import * as Tone from 'tone'


// chord
const majorSeventh = [0, 4, 7, 11]
const seventh = [0, 4, 7, 10]
const minor = [0, 3, 7]
 
const mode = 'major'
const intervalToRoot = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4
const majorChords = [majorSeventh, minor, minor, majorSeventh, seventh, minor, minor]
const chordProgression = [5, 1] // in degree
function getChordNotes(chordProgression) {
  const chords = chordProgression.map(degree => {
    console.log('degree', degree)
    const chordRoot = root + intervalToRoot[degree-1]
    console.log('chordRoot', chordRoot)
    const chord = majorChords[degree-1].map(interval => interval + chordRoot)
    return chord
  })
  return chords;
}
export default getChordNotes;

