const TaskController = require('../../controllers/Task')
const TaskModel = require('../../models/Task')
const httpMocks = require('node-mocks-http')
const {createdTask} = require('../data')


TaskModel.createTask = jest.fn(),
TaskModel.getTask = jest.fn(),
TaskModel.getAllTasks = jest.fn(),
TaskModel.deleteTask = jest.fn(),
TaskModel.toggleStatus = jest.fn()

let req,res,next
let taskFields = ["id","description","completed"]

beforeEach(()=>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})

describe('TaskController.getTaskList function', () => {
    it('should exist', () => {
        expect(typeof TaskController.getTaskList)
        .toBe("function")
    })

    it('should call TaskModel.getAllTasks', async () => {
        await TaskController.getTaskList(req,res,next)

        expect(TaskModel.getAllTasks).toBeCalled()
    })

    it('should return 200 response status', async () => {
        await TaskController.getTaskList(req,res,next)

        expect(res.statusCode).toBe(200)
    })

    it('should return array of tasks', async () => {
        TaskModel.getAllTasks.mockReturnValue([createdTask,createdTask])

        await TaskController.getTaskList(req,res,next)
        
        const response = res._getJSONData().data

        expect(Array.isArray(response)).toBe(true)
        expect(Object.keys(response[0]))
            .toEqual(expect.arrayContaining(taskFields))
    })
})