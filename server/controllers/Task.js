const TaskModel = require('../models/Task')
const { BadRequest } = require('../utilities/error')

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
    },

    async toggleTaskStatus (req,res,next) {
        try {
            const updatedTask = await TaskModel.toggleStatus(req.params.id)

            if(!updatedTask) {
                throw new BadRequest('Cannot modify non-existing resource')
            }

            return res.status(200).json({
                message: 'Task status updated',
                data: updatedTask
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController
