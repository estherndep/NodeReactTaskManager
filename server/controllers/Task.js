const TaskModel = require('../models/Task')

const TaskController = {
    async getTaskList (req,res,next) {
        try {
            const taskList = await TaskModel.getAllTasks()

            return res.status(200).json({
                data: taskList
            })
        } catch (error) {
            return res.status(500).json({
                message: 'somethinhg went wrong'
            })
        }
    },

    async createTask (req,res,next) {
        try {
            const newTask = await TaskModel.createTask(req.body.description)
            
            return res.status(201).json({
                message: 'created successfully',
                data: newTask
            })
        } catch (error) {
            return res.status(500).json({
                message: 'somethinhg went wrong'
            })
        }   
    }
}

module.exports = TaskController
