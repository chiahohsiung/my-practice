import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">Home</Link>
      <Link className="header__link about" to="/about">About</Link>
      <Link className="header__link" to="/projects">Projects</Link>
    </div>
  )
}