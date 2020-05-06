import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoListItem from './ToDoListItem';

const TodoList = () => {
  const context = useContext(TodoContext);

  const data = context.todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));
  return <div>{data}</div>;
};
export default TodoList;
