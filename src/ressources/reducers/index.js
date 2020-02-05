import { combineReducers } from 'redux';
import todos from './todos';
import catalogReducer from './catalogReducer';
import ownerReducer from './ownerReducer';

export default combineReducers({
  todos,
  catalog: catalogReducer,
  owner : ownerReducer

});
