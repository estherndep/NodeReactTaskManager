import React from 'react'
import TaskItem from '../TaskItem'

const TaskList = ({title, tasks, onToggle}) => {
    return (
        <div className="taskList">
            <h3>{title}</h3>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <TaskItem 
                        key={index} 
                        task={task} 
                        onToggle={onToggle}
                    />
                ))
            ) : (
                'No Tasks To Show'
            )
            }
        </div>
    )
}

export default TaskList
