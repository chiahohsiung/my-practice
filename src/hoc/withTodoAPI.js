import React from 'react';
import {getAllTodos} from '../apis/TodoAPI.js';

export function withTodoAPI(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoList: []
      };
    }

    componentDidMount() {
      console.log('HOC mounted')
      getAllTodos().then(data => {
        this.setState({todoList: data})
      })
    }

    render() {
      return (
        <WrappedComponent todoList={this.state.todoList} />
      )
    }
  }
}