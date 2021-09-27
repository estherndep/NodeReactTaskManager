import React from 'react'

const TaskItem = ({task,onToggle}) => {
    return (
        <div className="todo">
            <input type="checkbox" defaultChecked={task.completed} onClick={()=>onToggle(task.id)}></input>
            <span className="name">{task.description}</span>
        </div>
    )
}

export default TaskItem
