import{
  ADD_TODO,ADD_TODO_FAILED,ADD_TODO_SUCCEEDED,LIST_TODO
}from  '../actions';
const initialState = {
  data: [],
  loading: false,
  error: ''
};
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state];
    case ADD_TODO_SUCCEEDED:
      return [...state, { todo: action.todo, message: null }];
    case ADD_TODO_FAILED:
      return [...state, { todo: null, message: action.message }];
    case LIST_TODO:
      return [...state, { todo: action.todo }];
    default:
      return state;
  }
}
