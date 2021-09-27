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
    }
}

module.exports = TaskController
