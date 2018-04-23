import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('todos'));
var initialState = data ? data : [];
var reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TODOS:
            return state;
        case types.ADD_TODO:
            // console.log('action ', action);
            var newTodo = {
                text: action.todo.text,
                key: Date.now(),
                completed: false
            };
            state.push(newTodo);
            //localStorage.setItem('todos', JSON.stringify(state));
            return [...state];
        case types.REMOVE_TODO:
           
            return [...state];
        default: 
            return state;
    }
    
}

export default reducer;