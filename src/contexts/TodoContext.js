import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Estudar React', done: true },
    { id: 2, title: 'Estudar Angular', done: false },
    { id: 3, title: 'Estudar JavaScript', done: true },
    { id: 4, title: 'Estudar TypeScript', done: true },
  ]);

  const saveTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
