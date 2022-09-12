import React, { useState } from 'react';

import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

// createContext() is also a generic type.
// hence, can add in <> before the paramenters to better describe the context object 

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
 });

 const TodosContextProvider: React.FC = (props) => {
    
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

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
 };

 export default TodosContextProvider

