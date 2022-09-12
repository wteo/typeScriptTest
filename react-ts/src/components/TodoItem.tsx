import React from 'react';

import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ id: string, text: string, onRemove: (value: string) => void }> = (props) => {

    const clickHandler = () => {  
        const selectedTodo = props.id;
        props.onRemove(selectedTodo);
    };

    return <li className={classes.item} onClick={clickHandler}>{props.text}</li>;
};

export default TodoItem;
