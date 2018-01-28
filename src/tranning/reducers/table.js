

var initialState = {
    table: {
        rows: 'flip',
        column: 3
    }
}

var myReducer = (state = initialState, action) => {
    if(action.type === 'TABLE') {
        var { rows, column } = action.table; // rows = action.table.rows
        return {rows, column}
    }
    
    return state;
}


export default myReducer;