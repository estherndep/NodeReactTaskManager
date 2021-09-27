const request = require('supertest')
const app = require('../../app')

const baseURL = '/tasks'

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
})
