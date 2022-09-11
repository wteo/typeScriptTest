import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]); // empty array can't tell what type it is.
  // useState is a generic type
  // <Todo[]> This tells states to manage a list of todos.

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (selectedTodo: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== selectedTodo);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler}/>
    </div>
  );
}

export default App;
