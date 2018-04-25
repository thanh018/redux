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
            localStorage.setItem('todos', JSON.stringify(state));
            console.log('action ', newTodo);
            
            return [...state];
        case types.TOGGLE_TODO:
            return state.map(todo =>{
                if(todo.key !== action.todo.key){
                    return todo;
                }
                console.log(todo.completed);
                return {
                    ...todo,
                    completed:!todo.completed
                }
                console.log(action);
                

            });
        case types.REMOVE_TODO:
            return state.filter(function(todo,){
                return (todo.key !== action.todo.key);
            });
            
            
           
            return [...state];
        default: 
            return state;
    }
    
}

export default reducer;