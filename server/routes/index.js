const express =  require('express')
const router = express.Router()

const TaskController = require('../controllers/Task')

router.get('/tasks', TaskController.getTaskList)

router.post('/tasks/create', TaskController.createTask)

module.exports = router
