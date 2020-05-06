import React from 'react';
import TodoProvider from './contexts/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <TodoProvider>
      <TodoList />
      <br />
      <br />
      <hr />
      <br />
      <AddTodo />
    </TodoProvider>
  );
}
export default App;
