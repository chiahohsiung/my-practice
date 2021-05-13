import React, { useState } from 'react';
import { connect } from 'react-redux'
import { setApproach } from '../actions/midiActions'
import './ApproachButton.css'

function ApproachButton(props) {
  const {children, approach, setApproach} = props
  return (
    <button className={`approach-btn`} onClick={()=>setApproach(approach)}>
      {children}     
    </button>
  )
}

export default connect(null, {setApproach})(ApproachButton);