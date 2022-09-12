import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

// React.FC - defined in the Type React package
// This make it clear it's a function that acts as functional component.
// This is a generic type.
// <{}> allows us to merge our own objects

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



// if written full function instead of arrow function
/*
function Todos(props: { items: string[] }) {
    return (
        <ul>
            { props.items.map((item) => <li key={item}>{item}</li>) }
        </ul>
    );
};
*/


export default Todos;