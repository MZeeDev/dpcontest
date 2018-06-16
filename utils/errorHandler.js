class ErrorHandler {
    sendError(res, error) {
        console.log(error);
        res.status(error.code || 400).send(error);
    }
}

const errorHandler = new ErrorHandler();
module.exports = { errorHandler };