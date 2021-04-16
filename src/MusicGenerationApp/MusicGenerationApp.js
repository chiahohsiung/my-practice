import React from 'react';
import SongList from './SongList'
// import OutputBoard from './OutputBoard'

import './MusicGenerationApp.css'

class MusicGenerationApp extends React.Component {
  render() {
    return(
      <div className="app">
        <div className="header">
          <h1>Markov Chain</h1>
        </div>
        <div className="content">
          <SongList />
          { /* <OutputBoard />*/}
        </div>
      </div>
    ) 
  }
}


export default MusicGenerationApp ;