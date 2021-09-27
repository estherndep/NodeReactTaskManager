import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaskList from '../../components/TaskList'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 12345,
            description: "Test task description",
            completed: false
        },
        {
            id: 12347,
            description: "Test task description 2",
            completed: false
        },
        {
            id: 12346,
            description: "Test task description 3",
            completed: true
        }
    ])

    return (
        <div>
            <Header title="To Do List"/>

            {tasks.length > 0 ? (
                <>
                    <TaskList
                        title="Pending"
                        tasks={tasks.filter((task) => !task.completed)}
                    />
                    <TaskList
                        title="Completed"
                        tasks={tasks.filter((task) => task.completed)}
                    />
                </>
            ) : (
                'No Tasks To Show'
            )}

            <Footer/>
        </div>
    )
}

export default App
