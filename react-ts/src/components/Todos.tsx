import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

import classes from './Todos.module.css';

// React.FC - defined in the Type React package
// This make it clear it's a function that acts as functional component.
// This is a generic type.
// <{}> allows us to merge our own objects

const Todos: React.FC<{items: Todo[], onRemove: (selectedTodo: string) => void }> = (props) => {

    const removeTodoHandler = (selectedTodo: string) => {
        props.onRemove(selectedTodo);
    }

    return (
        <ul className={classes.todos}>
            { props.items.map((item) => <TodoItem id={item.id} key={item.id} text={item.text} onRemove={removeTodoHandler} />) }
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