import React, { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

// set void since onAddTodo function not returning anything
// But we do need to assign type to the value of the parameter.
/* 
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

}
*/

// When using a a global context, can get rid of props and their assigned types.
// This is because the types are already defined in the global context.
const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    // <> telling system what specific element type we want stored.
    // Each of these DOM elements have their own built-in Type which you can use in TypeScript to refer to them
    const todoTextInputRef = useRef<HTMLInputElement>(null); // this tells TypeScript that a user input will be connected to the HTMLInput Element
    // You also need to put in the default value for ref, "null". Otherwise, TypeScript will still advise you there's an error 

    // React.FormEvent - special event type for form submission provided by React package
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        // Should only use this annotation "!" if you are 100% sure that the current value can't be null
        // ? and ! are regular operators provided by JavaScript, which you can use in TypeScript when working with values that could be null
        // These are especially for useRef() hook as refs could be null or could not be connected to any value pre-render

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);

    };

    return (
    <form onSubmit={submitHandler} className={classes.form} >
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
    );
};

export default NewTodo;