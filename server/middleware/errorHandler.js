const { ApiError } = require("../utilities/error")

module.exports = (error,req,res,next) => {
    if (error instanceof ApiError) {
        return res.status(error.code).json({message: error.message})
    }

    return res.status(500).json({message:'Something went wrong'})
}
