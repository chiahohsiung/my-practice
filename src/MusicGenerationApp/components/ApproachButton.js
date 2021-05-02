import React, { useState } from 'react';

import './ApproachButton.css'

function ApproachButton(props) {
  const {children} = props
  return (
    <button className={`approach-btn`}>
      {children}     
    </button>
  )
}

export default ApproachButton;