const request = require('supertest')
const app = require('../../app')
const {validTaskEntry,createdTask,completedTask} = require('../data')

const baseURL = '/tasks'

let taskFields = ["id","description","completed"]

describe(`GET ${baseURL}`, () => {
    it('should return an array of all tasks',async ()=>{
        const response = await request(app)
            .get(baseURL)

        expect(Array.isArray(response.body.data)).toBe(true)
    })

    it('should return 200 status code',async () =>{
        const response = await request(app)
            .get(baseURL)

        expect(response.statusCode).toBe(200)
    })
})

describe(`POST ${baseURL}/create`, () => {
    describe('given a description', () => {
        it('should return 201 status code',async () => {
            const response = await request(app)
                .post(`${baseURL}/create`)
                .send(JSON.parse(validTaskEntry))

            expect(response.statusCode).toBe(201)
        })
        
        it('should respond with a JSON object of new uncompleted task', async () => {
            const response = await request(app)
                .post(`${baseURL}/create`)
                .send(JSON.parse(validTaskEntry))


            taskFields.forEach(item => {
                expect(response.body.data).toHaveProperty(item)
            })
            expect(response.body.data.completed).toBe(false)
        })
    })

    describe('given an invalid request body', () => {
        it('should return 400 status code',async () => {
            const response = await request(app)
                .post(`${baseURL}/create`)
                .send({})

            expect(response.statusCode).toBe(400)
        })
    }) 

    describe(`POST ${baseURL}/:id/toggle-status`, () => {
        describe('given an id for a task that exists', () => {
            let id
    
            beforeEach(async () => {
                const createResponse = await request(app)
                    .post(`${baseURL}/create`)
                    .send(JSON.parse(validTaskEntry))
                
                id = createResponse.body.data.id
            });
    
            it('should return 200 status code',async () => {
                const toggleResponse = await request(app)
                    .post(`${baseURL}/${id}/toggle-status`)
    
                expect(toggleResponse.statusCode).toBe(200)
            })
    
            it('should respond with a JSON object of updated task with changed status', async () => {
                const toggleResponse = await request(app)
                    .post(`${baseURL}/${id}/toggle-status`)
    
                expect(toggleResponse.body.data.completed).toBe(true)
            })
        })
    
        describe('given an id for a task that does not exist', () => {
            it('should return 400 status code',async () => {
                const toggleResponse = await request(app)
                    .post(`${baseURL}/111111111111/toggle-status`)
    
                    expect(toggleResponse.statusCode).toBe(400)
                })
        })
    })
})
