import { combineReducers } from 'redux';
import postReducer from './postReducer.js'


// root reducer
export default combineReducers({
  posts: postReducer
});