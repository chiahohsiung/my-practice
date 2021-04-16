import React from 'react';
import { store } from './Redux/myCreateStore.js'

class CounterApp extends React.Component {
  
  componentDidMount() {
    store.subscribe(()=>{
      return this.forceUpdate()
    })
  }
  
  handleIncrement = () => {
    console.log('handle increment')
    store.dispatch({ type: 'counter/incremented' })
  }

  handleDecrement = () => {
    console.log('handle decrement')
    store.dispatch({ type: 'counter/decremented' })
  }

  render() {
    return(
      <div>
        <h1>CounterApp</h1>
        <span>Counter: {store.getState().value}</span>
        <br/>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    ) 
  }
}


export default CounterApp;