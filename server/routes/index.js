const express =  require('express')
const router = express.Router()

const TaskController = require('../controllers/Task')

router.get('/tasks', TaskController.getTaskList)

module.exports = router
