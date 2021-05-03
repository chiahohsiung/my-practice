import { combineReducers } from 'redux'
import midiReducer from './midiReducer'

const rootReducer = combineReducers({
  midis: midiReducer
})

export default rootReducer;