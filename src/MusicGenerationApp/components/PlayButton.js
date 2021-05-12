import React, {useState} from 'react';

import './PlayButton.css'

function PlayButton(props) {

  return (
    <button className="play-btn" onClick={()=>props.handlePlay()}>Play</button>
  )
}

export default PlayButton;