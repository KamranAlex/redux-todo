import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import todosReducer from './todos/todosReducer';

export default combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});
