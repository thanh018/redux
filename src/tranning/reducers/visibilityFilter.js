var initialState = {
    visibilityFilter: {
        id: 100, 
        name: 'visible'
    }
    
}

var myReducer = (state = initialState, action) => {
    if (action.type === 'VISIBLE') {
        var {id, name} = action.visibilityFilter;
        return {id, name} ;
    }
    return state;
}

export default myReducer;
