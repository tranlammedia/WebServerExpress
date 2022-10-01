const catchError = (err, req, res, next) => {
    const finalError = {...err}

    if(err.name === 'ValidationError') {
        const errors = err.errors
        const keys = Object.keys(errors)
        const errorObj = {}
        keys.map((key) => {
            errorObj[key] = errors[key].message
        })
        finalError.statusCode = 400
        finalError.message = errorObj
        
    }
    // console.log(JSON.stringify(err, null, 2))
    res.status(finalError.statusCode || 500).json({
        success: false,
        statusCode: finalError.statusCode || 500,
        message: err.message || "Internal Erorr",
    })
}

module.exports = catchError