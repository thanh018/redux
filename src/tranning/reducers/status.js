

var initialState = 1;

var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state = state + 1;
        return state;
    }
    
    return state;
}


export default myReducer;