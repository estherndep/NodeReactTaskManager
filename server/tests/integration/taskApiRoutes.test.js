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
