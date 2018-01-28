import status from './status'; // reducer status
import sort from './sort'; //reducer sort
import table from './table'; //reducer TABLE
import social from './social'; //reducer SOCIAL
import sound from './sound'; //reducer visibilityFilter

import { combineReducers } from 'redux';

const myReducer = combineReducers({
    status : status,
    sort: sort,
    table: table,
    social: social,
    sound: sound

});

export default myReducer;