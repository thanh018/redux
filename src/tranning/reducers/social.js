

var initialState = {
    social: {
        name: 'twitter',
        follow: 200
    }
}

var myReducer = (state = initialState, action) => {
    if(action.type === 'SOCIAL') {
        var { name, follow } = action.social; // name = action.social.name
        return {name, follow}
    }
    
    return state;
}


export default myReducer;