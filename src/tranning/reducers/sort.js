var initialState = {
    sort: {
        by: 'Joseph',
        value: 1
    }
}

var reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SORT':
            var {by, value} = action.sort;
            return {
                by, value
            }
        default: 
            return state;
    }
}

export default reducer;