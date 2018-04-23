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

export const toggleTodo = (text) => {
    return {
        type: types.TOGGLE_TODO,
        text
    }
}

export const removeTodo = (key) => {
    return {
        type: types.REMOVE_TODO,
        key
    }
}