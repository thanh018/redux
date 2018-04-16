import status from './status';
import sort from './sort';
import todoApp from './todoApp';




import { combineReducers } from 'redux';


export default combineReducers({
    status,
    sort,
    todoApp
});

