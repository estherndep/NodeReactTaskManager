const {BadRequest} = require('../utilities/error')

module.exports = (schema) => {
    return async (req,res,next) => {
        try {
            await schema.validate(req.body)
            next()
        } catch (error) {
            next(new BadRequest(error))
        }
        
    }
}
