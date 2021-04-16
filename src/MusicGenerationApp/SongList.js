import React from 'react';
import './SongList.css'
import Song from './Song'

const songMidis = [
  {songNameme:'libra', midi: '123'}
]



class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: ['libra', 'luna[r]tic', '5-HTP', 'The Beginning']
    }
  }
  render() {
    const songs = this.state.songList.map((songName, id) => {
      return <Song key={id} name={songName}/>
    })
    return(
      <div className="song-list-container">
        <h2 className="song-list-header">Song List</h2>
        {songs}
      </div>
    ) 
  }
}


export default SongList;