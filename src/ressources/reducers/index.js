import { combineReducers } from 'redux';
import todos from './todos';
import catalogReducer from './catalogReducer';
import ownerReducer from '../reducers/owner/reducer';

export default combineReducers({
  todos,
  catalog: catalogReducer,
  owner : ownerReducer

});
