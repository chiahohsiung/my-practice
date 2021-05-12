import React from 'react'
import './Description.css'

function Description(props) {
  return (
    <div className="description-block">
      <p>{props.description}</p>
      {props.children}
    </div>
  )
}

export default Description;