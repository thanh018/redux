import { combineReducers } from "redux";

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilter
} from './../constants/ActionTypes';

const { SHOW_ALL } = VisibilityFilter;

var visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

var todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.text) {
                    return Object.assign({}, todo, {
                         completed: !todo.completed
                    })
                 }
                return todo;
            })

        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
  })
   
  export default todoApp;

