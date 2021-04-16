import React from 'react';
import './Dashboard.css';
// import {getAllTodos} from '../apis/TodoAPI.js';


class Dashboard extends React.Component {
  render() {
    const numberCompleted = this.props.todoList.filter(todo => 
      todo.completed === true
    ).length
    return (
      <div>
        <span>Number of todos: {this.props.todoList.length}</span>
        <span>Number of completed todos: {numberCompleted}</span>
      </div>
    ) 
  }
}

export default Dashboard;