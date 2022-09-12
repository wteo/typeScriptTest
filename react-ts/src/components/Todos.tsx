import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';


const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const removeTodoHandler = (selectedTodo: string) => {
        todosCtx.removeTodo(selectedTodo);
    }

    return (
        <ul className={classes.todos}>
            { todosCtx.items.map((item) => <TodoItem id={item.id} key={item.id} text={item.text} onRemove={removeTodoHandler} />) }
        </ul>
    );
};

export default Todos;