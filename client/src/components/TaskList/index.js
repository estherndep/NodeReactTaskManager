import React from 'react'
import TaskItem from '../TaskItem'

const TaskList = ({title, tasks}) => {
    return (
        <>
            <h1>{title}</h1>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <TaskItem 
                        key={index} 
                        task={task}  
                    />
                ))
            ) : (
                'No Tasks To Show'
            )
            }
        </>
    )
}

export default TaskList
