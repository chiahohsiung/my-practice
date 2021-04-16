import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import TodoList from './components/TodoList';
import Dashboard from './components/Dashboard';
import PostPage from './components/PostPage';
import { Route, Switch } from 'react-router-dom';
import { withTodoAPI } from './hoc/withTodoAPI';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/todolist" component={withTodoAPI(TodoList)} />
        <Route path="/dashboard" component={withTodoAPI(Dashboard)} />
        <Route path="/postpage" component={PostPage} />       
      </Switch>
    </div>
  );
}
        // <Route path="/shop" component={Shop} />
export default App;
