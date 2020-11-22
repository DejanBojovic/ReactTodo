import React from 'react';
import './TodoItem.css';

const TodoItem = ( props ) => {
    return (
        <div>
            <p className={props.completed ? "line-across" : null}>{ props.text }</p>
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={props.toggle}
            />
        </div>
    )
}

export default TodoItem;