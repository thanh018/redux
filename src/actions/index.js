import * as types from './../constants/ActionTypes';

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