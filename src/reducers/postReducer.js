import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      console.log('reducer, action fetch posts')
      return {
        ...state, // how?
        items: action.payload
      }

    case NEW_POST:
      console.log('reducer, action new post')
      return {
        ...state, // how?
        item: action.payload
      }

    default:
      return state;
  }
}