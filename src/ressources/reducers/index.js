import { combineReducers } from 'redux';
import todos from './todos';
import catalogReducer from './catalogReducer';

export default combineReducers({
  todos,
  catalog: catalogReducer

});
