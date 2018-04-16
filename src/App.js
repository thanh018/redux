import React, { Component } from 'react';
import './App.css';
import './tranning/demo.js';
import AddTodo from './tranning/containers/AddTodo';
import TodoList from './tranning/components/TodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
