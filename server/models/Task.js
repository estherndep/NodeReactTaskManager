const {sleep} = require('../utilities/helper')

const TaskMap = new Map()

async function getTask(taskId) {
    const task = TaskMap.get(parseInt(taskId))

    // sleep for 10ms to simulate asinchronous call
    await sleep(10)
    return task
}

async function getAllTasks() 
{
    await sleep(10)
    return Array.from(TaskMap.values())
}

async function createTask(taskDescription) {
    //generate unique id
    //form new task object
    const newTask = {
        id: TaskMap.size() + 1,
        description: taskDescription,
        completed: false
    }

    TaskMap.set(newTask.id,newTask)

    await sleep(10)
    return newTask
}

async function deleteTask(taskId) {
    const task = await getTask(taskId)

    TaskMap.delete(parseInt(taskId))
    
    return task
}

async function toggleStatus(taskId) {
    let task = await getTask(taskId)
    
    if (!task) {return}
    
    task.completed = !task.completed
    TaskMap.set(taskId,task)

    await sleep(10)
    return task
}

module.exports = {
    getTask,
    getAllTasks,
    createTask,
    deleteTask,
    toggleStatus
}
