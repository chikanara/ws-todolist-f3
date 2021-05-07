import React from 'react'
import "../App.css"

const TaskItem = ({todo,handleComplete,handleDelete}) => {
    return (
        <div>
            <p className={todo.isDone ? "done" : null}>{todo.task}</p>
            <button onClick={() => handleComplete(todo.id)}>{todo.isDone ? "undo" : "complete"}</button>
            
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default TaskItem
