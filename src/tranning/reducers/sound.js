var initialState = {
    sound: {
        id: 100, 
        name: 'sound default'
    }
    
}

var myReducer = (state = initialState, action) => {
    if (action.type === 'SOUND') {
        var {id, name} = action.sound;
        return {id, name} ;
    }
    return state;
}

export default myReducer;
