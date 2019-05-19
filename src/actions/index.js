import * as types from './../constants/ActionTypes';
import axios from 'axios';

export const todos = (text) => {
  return {
    type: types.TODOS,
    text
  }
}

export const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    todo
  }
}

export const toggleTodo = (todo) => {
  return {
    type: types.TOGGLE_TODO,
    todo
  }
}

export const deleteTodo = (todo) => {
  return {
    type: types.REMOVE_TODO,
    todo
  }
}

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log('response = ' + response);
        resolve({
          type: types.FETCH_DATA,
          todo: response.data.map(item => ({
            text: item.title,
            key: item.id,
            completed: item.completed
          }))
        })
      })
      .catch(function (error) {
        console.log(error);
        reject({
          type: types.FETCH_DATA,
          todo: ""
        })
      });
  });

}