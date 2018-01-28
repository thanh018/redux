import { createStore } from 'redux';
import { status, sort, table, social, visibilityFilter } from './actions/index';
import myReducer from './reducers/index';


const store = createStore(myReducer);
console.log('Default : ', store.getState());

store.dispatch(status());
console.log('TOOGLE_STATUS : ', store.getState());


store.dispatch(sort({
    by: 'name',
    value: -1
} ));
console.log('SORT: ', store.getState());


store.dispatch(table({
    rows: 'changed flip',
    column: 5
} ));
console.log('TABLE: ', store.getState());


store.dispatch(social({
    name: 'instagram',
    follow: 5000
} ));
console.log('SOCIAL: ', store.getState());

store.dispatch(visibilityFilter({
    id: 200,
    name: 'visibility CHANGED'
} ));
console.log('VISIBILITY: ', store.getState());

