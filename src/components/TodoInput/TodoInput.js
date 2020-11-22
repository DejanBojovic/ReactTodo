import React from 'react';
import './TodoInput.css';

const TodoInput = ( props ) => {
    return (
        <div className="input-container">
            <input className="todo-input" type="text"/>
            <button onClick={props.addMethod} className="todo-button">Add</button>
        </div>
    );
}

export default TodoInput;