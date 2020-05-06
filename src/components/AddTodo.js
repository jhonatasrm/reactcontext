import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveTodo(todo);
  };

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="ADD TO DO"
        id="title"
        name="title"
        onChange={handleInputChange}
      />
      <button type="button">ADD</button>
    </form>
  );
};
export default AddTodo;
