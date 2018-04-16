import * as types from './../constants/ActionTypes';

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}

export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        text
    }
}

export const toggleTodo = (text) => {
    return {
        type: types.TOGGLE_TODO,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return { 
        type: types.SET_VISIBILITY_FILTER, 
        filter 
    }
}

