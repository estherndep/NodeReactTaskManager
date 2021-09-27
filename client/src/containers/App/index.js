import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaskList from '../../components/TaskList'

axios.defaults.baseURL = 'http://localhost:3000'

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

    useEffect(() => {
        async function initialiseTasks() {
            const fetchedTasks = await fetchTasks()

            console.log(fetchedTasks)
            setTasks([...tasks,fetchedTasks])
        }
    
        initialiseTasks()
    }, [])
    
    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await axios.get('/tasks')

        return res.data.data
    }

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
