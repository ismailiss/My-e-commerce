import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.checked);
    //useDispatch({type:})
  };
  return (
    <div>
      {todos.map(({ todo }) => {
        return (
          <span>
            <input type='checkbox' onChange={handleChange} value={todo.label} /> {todo.label}
          </span>
        );
      })}
    </div>
  );
};
