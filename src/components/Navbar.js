import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/about">About</Link>
        <Link className="navbar__link" to="/todolist">TodoList</Link>
        <Link className="navbar__link" to="/dashboard">Dashboard</Link>
        <Link className="navbar__link" to="/postpage">PostPage</Link>
      </div>
    ) 
  }
}

export default Navbar;