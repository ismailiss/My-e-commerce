import React from 'react';
import AddSection from '../features/new-todo';
import ListSection from '../features/list-todo';
import { useSelector } from 'react-redux';

export default () => {
  const done = useSelector(({ todos }) => {
    return todos.filter(function({ todo }) {
      return todo.done === true;
    });
  });
  return (
    <div>
      <h1>Todo goes here</h1>
      <AddSection />
      <ListSection />
      {done.length}
    </div>
  );
};
