import React from 'react'

const TaskItem = ({task}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={task.completed}></input>
            <h1>{task.description}</h1>
        </div>
    )
}

export default TaskItem
