import React from 'react';
// import {getAllTodos} from '../apis/TodoAPI.js';


class TodoList extends React.Component {
  render() {
    const todoList = this.props.todoList.map(todo => <li key={todo.id}>{todo.title}</li>)
    return (
      <div className="todolist-container">
        <ul>
          {todoList}
        </ul>
      </div>  
    ) 
  }
}

export default TodoList;