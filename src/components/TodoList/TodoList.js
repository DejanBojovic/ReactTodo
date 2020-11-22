import React from 'react';
import TodoItem from './TodoItem/TodoItem';

import './TodoList.css';

const TodoList = ( props ) => {
    return (
        <div className="todo-list-container">
            {props.todos.map((value) => {
                return (
                    <TodoItem 
                        key={value.id}
                        completed={value.completed}
                        text={value.text}
                        toggle={() => props.toggleMethod(value.id)}
                    />
                )
            })}
        </div>
    );
}

export default TodoList;