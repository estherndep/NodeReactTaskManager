const express =  require('express')
const router = express.Router()
const DtoValidator = require('../middleware/dtoValidator')
const DTOschemas = require('../middleware/DTO')

const TaskController = require('../controllers/Task')

router.get('/tasks', TaskController.getTaskList)

router.post('/tasks/create', DtoValidator(DTOschemas.taskCreateDTO), TaskController.createTask)

module.exports = router
