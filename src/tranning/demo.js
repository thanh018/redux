import { createStore } from 'redux';
import {status, sort} from './actions/index';
import {addTodo, toggleTodo, setVisibilityFilter} from './actions/index';
import reducer from './reducers/index';
import {
    VisibilityFilter
} from './constants/ActionTypes';


const store = createStore(reducer);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(status());
store.dispatch(sort({
    by: 'Smith',
    value: 0
}));


store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_ACTIVE))

unsubscribe();




