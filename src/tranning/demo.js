import { createStore } from 'redux';
import { status, sort, table, social, sound } from './actions/index';
import { addTodo } from './actions/actions';
import myReducer from './reducers/index';
import todoApp from './reducers/reducers';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions/actions';
import {
    toggleTodo,
    setVisibilityFilter
} from './actions/actions';


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

store.dispatch(sound({
    id: 200,
    name: 'sound changed'
} ));
console.log('SOUND: ', store.getState());


/// todoApp

console.log('============TODO APP============== ');

const storeApp = createStore(todoApp);

// Log the initial state
console.log(storeApp.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = storeApp.subscribe(() =>
  console.log(storeApp.getState())
)

// Dispatch some actions
storeApp.dispatch(addTodo('Learn about actions'))
storeApp.dispatch(addTodo('Learn about reducers'))
storeApp.dispatch(addTodo('Learn about storeApp'))
storeApp.dispatch(toggleTodo(0))
storeApp.dispatch(toggleTodo(1))
storeApp.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()







