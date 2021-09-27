import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaskList from '../../components/TaskList'
import TaskInput from '../../components/TaskInput'

axios.defaults.baseURL = 'http://localhost:3000'

const App = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function initialiseTasks() {
            const fetchedTasks = await fetchTasks()

            console.log(fetchedTasks)
            setTasks(fetchedTasks) 
        }
    
        initialiseTasks()
    }, [])
    
    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await axios.get('/tasks')

        return res.data.data
    }

    //add task
    const addTask = async (task) => {
        console.log(task)
        const res = await axios.post('/tasks/create', task)
    
        res.status === 201
        ? setTasks([...tasks, res.data.data])
        : alert('Error adding this task')
    }

    // Toggle task status
    const toggleStatus = async (id) => {
        const res = await axios.post(`/tasks/${id}/toggle-status`)
        const updatedTask = res.data.data

        let updatedTaskList = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        )

        setTasks(updatedTaskList)
    }

    return (
        <div>
            <Header title="To Do List"/>
            <TaskInput onAdd={addTask}/>

            {tasks.length > 0 ? (
                <>
                    <TaskList
                        title="Pending"
                        tasks={tasks.filter((task) => !task.completed)}
                        onToggle={toggleStatus}
                    />
                    <TaskList
                        title="Completed"
                        tasks={tasks.filter((task) => task.completed)}
                        onToggle={toggleStatus}
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
