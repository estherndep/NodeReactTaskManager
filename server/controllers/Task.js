const TaskModel = require('../models/Task')

const TaskController = {
    async getTaskList (req,res,next) {
        try {
            const taskList = await TaskModel.getAllTasks()

            return res.status(200).json({
                data: taskList
            })
        } catch (error) {
            next(error)
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
            next(error)
        }   
    }
}

module.exports = TaskController
