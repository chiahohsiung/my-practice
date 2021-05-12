import React, {useState} from 'react';

import './PlayButton.css'

function GenerateExample(props) {

  return (
    <button className="generate-example-btn" onClick={()=>alert('generate example')}>Example</button>
  )
}

export default GenerateExample;