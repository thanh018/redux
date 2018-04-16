var initialState = true;

var reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_STATUS': 
            state = !state
            return state;
        default: 
            return state;
    }
}

export default reducer;