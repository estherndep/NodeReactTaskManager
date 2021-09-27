const TaskController = require('../../controllers/Task')
const TaskModel = require('../../models/Task')
const httpMocks = require('node-mocks-http')
const {validTaskEntry,createdTask,completedTask} = require('../data')

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

describe('TaskController.createTask function', () => {
    it('should exist', () => {
        expect(typeof TaskController.createTask)
        .toBe("function")
    })
    it('should call TaskModel.createTask', async () => {
        req.body = validTaskEntry
        await TaskController.createTask(req,res,next)

        expect(TaskModel.createTask).toBeCalledWith(validTaskEntry.description)
    })
    it('should return 201 response status', async () => {
        req.body = validTaskEntry
        await TaskController.createTask(req,res,next)

        expect(res.statusCode).toBe(201)
    })
    it('should return json object containing new task object', async () => {
        req.body = validTaskEntry
        TaskModel.createTask.mockReturnValue(createdTask)

        await TaskController.createTask(req,res,next)
        
        expect(Object.keys(res._getJSONData().data))
        .toEqual(expect.arrayContaining(taskFields))
    })
})

describe('toggleTaskStatus function', () => {
    it('should exist', () => {
        expect(typeof TaskController.createTask)
        .toBe("function")
    })

    it('should call TaskModel.toggleStatus', async () => {
        let id = '123456'
        req.params = {id}

        await TaskController.toggleTaskStatus(req,res,next)
        expect(TaskModel.toggleStatus).toBeCalledWith(id)
    })

    it('should return 200 response status', async () => {
        await TaskController.toggleTaskStatus(req,res,next)
        expect(res.statusCode).toBe(200)
    })

    it('should return object containing updated task', async () => {
        TaskModel.toggleStatus.mockReturnValue(completedTask)

        await TaskController.toggleTaskStatus(req,res,next)
        
        const response = res._getJSONData().data

        expect(response.id).toEqual(completedTask.id)
        expect(Object.keys(response))
            .toEqual(expect.arrayContaining(taskFields))
    })
})
