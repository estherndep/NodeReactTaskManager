class ApiError extends Error {
  constructor(message,code) {
    super()
    this.message = message
    this.code = code
  }
}

class BadRequest extends ApiError { 
    constructor(message) {
        super(message, 400);
        this.name = 'BadRequest'
    }
}
class NotFound extends ApiError { 
    constructor(message) {
        super(message, 404)
        this.name = 'NotFound'

    }
}

module.exports = {
  ApiError,
  BadRequest,
  NotFound
};
