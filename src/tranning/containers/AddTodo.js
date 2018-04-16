import React, { Component } from 'react';
class AddTodo extends Component {
  render() {
    return (
      <div className="AddTodo">
        <form>
            <input ref="name" /> 
            <button type="button">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
